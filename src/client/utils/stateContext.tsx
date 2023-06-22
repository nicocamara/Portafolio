import { browserLocalPersistence, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes } from 'firebase/storage';
import { createContext, useEffect, useState } from 'react';
import { Asset, Portfolio, User } from './Type';
import callApi from './callApi';
import firebaseApp, { storageFile } from './firebaseApp';

export type ContextValue = {
  user?: User;
  myPortfolio?: Portfolio;
  handlers: {
    register: (_user: Omit<User, 'uid'> & { password: string }) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    checkUserName: (userName: string) => Promise<void>;
    createPortfolio: (values: Omit<Portfolio, 'id'>) => Promise<void>;
    getPortfolio: (userName: string) => Promise<Portfolio>;
    uploadFiles: (assets: Asset[]) => Promise<void>;
    logOut: () => Promise<void>;
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

  const logOut = async () => {
    try {
      await auth.signOut();
      setPersistanceId('');
      await window.location.replace('/auth');
    } catch (error) {
      console.error('Error durante el logout:', error);
    }
  };

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

  const checkUserName = async (userName: string) => {
    await callApi({ method: 'GET', endpoint: `/check-userName/${userName}` });
  };

  const getUser = async (email: string, password: string) => {
    const firebaseAuthUser = await signInWithEmailAndPassword(auth, email, password);
    await auth.setPersistence(browserLocalPersistence);
    const firestoreUser = await callApi({ method: 'GET', endpoint: `/login/${firebaseAuthUser.user.uid}` });
    setUser(firestoreUser);
  };

  const getPortfolio = async (userName: string) => {
    const response = await callApi({ method: 'GET', endpoint: `/portfolio/${userName}` });
    return response;
  };

  const createPortfolio = async (values: Omit<Portfolio, 'id'>) => {
    const response = await callApi({ method: 'POST', endpoint: `/portfolio/${user?.userName}`, payload: values });
    setMyPorfolio(response);
  };

  const uploadFiles = async (assets: Asset[]) => {
    console.log('uploadFiles', assets, user);

    assets.forEach(async file => {
      const storageRef = ref(storageFile, `images/${file.fileType}/${file.name}`);
      await uploadBytes(storageRef, file);
    });
  };

  // const getFile = async () => {
  //   const storageRef = ref(storageFile, 'images/');
  //   await listAll(storageRef).then(response => {
  //     response.items.forEach(item => getDownloadURL(item).then(url => setAvatar(prev => [...[prev], url])));
  //   });
  // };

  const handlers = {
    register: registerHandler,
    login: getUser,
    checkUserName,
    createPortfolio,
    getPortfolio,
    uploadFiles,
    logOut,
  };

  return <StateContext.Provider value={{ user, handlers, myPortfolio }}>{children}</StateContext.Provider>;
};

export default StateContext;
