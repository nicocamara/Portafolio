import { browserLocalPersistence, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
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
  console.log('si mi wray', user);

  const registerHandler = async (_user: Omit<User, 'uid'> & { password: string }) => {
    const newUser = await callApi({ method: 'POST', endpoint: '/register', payload: _user });
    console.log('newUser', newUser);
  };

  const getUser = async (email: string, password: string) => {
    const firebaseAuthUser = await signInWithEmailAndPassword(auth, email, password);
    const getCurrentUser = async (userId: string): Promise<User> =>
      await callApi({ method: 'GET', endpoint: `/login/${userId}` });
    const firestoreUser = await getCurrentUser(firebaseAuthUser.user.uid);
    await auth.setPersistence(browserLocalPersistence);
    setUser(firestoreUser);
  };

  const handlers = {
    register: registerHandler,
    login: getUser,
  };

  return <StateContext.Provider value={{ user, handlers }}>{children}</StateContext.Provider>;
};

export default StateContext;
