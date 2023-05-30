import { browserLocalPersistence, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { Portfolio, User } from './Type';
import callApi from './callApi';
import firebaseApp from './firebaseApp';

export type ContextValue = {
  user?: User;
  myPortfolio?: Portfolio;
  handlers: {
    register: (_user: Omit<User, 'uid'> & { password: string }) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    checkUserName: (userName: string) => Promise<void>;
    createPortfolio: (values: Omit<Portfolio, 'id'>) => Promise<void>;
  };
};
const auth = getAuth(firebaseApp);
const StateContext = createContext<ContextValue>({} as ContextValue);

export const StateProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const [myPortfolio, setMyPorfolio] = useState<Portfolio>();
  const [persistanceId, setPersistanceId] = useState<string>();

  auth.onAuthStateChanged(_firebaseAuthUser => {
    if (_firebaseAuthUser?.uid && _firebaseAuthUser?.uid !== persistanceId) {
      setPersistanceId(_firebaseAuthUser.uid);
    }
  });

  useEffect(() => {
    (async () => {
      if (persistanceId && !user) {
        const firestoreUser = await callApi({ method: 'GET', endpoint: `/login/${persistanceId}` });
        setUser(firestoreUser);
      }
    })();
  }, [persistanceId]);

  const registerHandler = async (_user: Omit<User, 'uid'> & { password: string }) => {
    await callApi({ method: 'POST', endpoint: '/register', payload: _user });
    await login(_user.email, _user.password);
  };

  const checkUserName = async (userName: string) => {
    await callApi({ method: 'GET', endpoint: `/check-userName/${userName}` });
  };

  const login = async (email: string, password: string) => {
    const firebaseAuthUser = await signInWithEmailAndPassword(auth, email, password);
    await auth.setPersistence(browserLocalPersistence);
    const firestoreUser = await callApi({ method: 'GET', endpoint: `/login/${firebaseAuthUser.user.uid}` });
    setUser(firestoreUser);
  };

  const createPortfolio = async (values: Omit<Portfolio, 'id'>) => {
    const response = await callApi({ method: 'POST', endpoint: `/portfolio/${user?.userName}`, payload: values });
    setMyPorfolio(response);
  };

  const handlers = {
    register: registerHandler,
    login,
    checkUserName,
    createPortfolio,
  };

  return <StateContext.Provider value={{ user, handlers, myPortfolio }}>{children}</StateContext.Provider>;
};

export default StateContext;
