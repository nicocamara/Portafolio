import { browserLocalPersistence, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import callApi from './callApi';
import { User } from './Type';
import firebaseApp from './firebaseApp';

export type ContextValue = {
  user?: User;
  handlers: {
    register: (_user: Omit<User, 'uid'> & { password: string }) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
  };
};
const auth = getAuth(firebaseApp);
const StateContext = createContext<ContextValue>({} as ContextValue);

export const StateProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
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
    const { token, ...newUser } = await callApi({ method: 'POST', endpoint: '/register', payload: _user });
    await signInWithEmailAndPassword(auth, _user.email, _user.password);
    await auth.setPersistence(browserLocalPersistence);
    setUser(newUser);
  };

  const getUser = async (email: string, password: string) => {
    const firebaseAuthUser = await signInWithEmailAndPassword(auth, email, password);
    await auth.setPersistence(browserLocalPersistence);
    const firestoreUser = await callApi({ method: 'GET', endpoint: `/login/${firebaseAuthUser.user.uid}` });
    setUser(firestoreUser);
  };

  const handlers = {
    register: registerHandler,
    login: getUser,
  };

  return <StateContext.Provider value={{ user, handlers }}>{children}</StateContext.Provider>;
};

export default StateContext;
