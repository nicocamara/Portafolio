import { createContext, useState } from 'react';
import callApi from './callApi';
import { User } from './Type';

export type ContextValue = {
  user?: User;
  handlers: {
    register: (_user: Omit<User, 'uid'> & { password: string }) => Promise<void>;
  };
};

const StateContext = createContext<ContextValue>({} as ContextValue);

export const StateProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();

  const registerHandler = async (_user: Omit<User, 'uid'> & { password: string }) => {
    const newUser = await callApi({ method: 'POST', endpoint: '/register', payload: _user });
    console.log('newUser', newUser);
  };

  const handlers = {
    register: registerHandler,
  };

  return <StateContext.Provider value={{ user, handlers }}>{children}</StateContext.Provider>;
};

export default StateContext;
