import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyANSpkTs45PgSBw_OWhB8LKQ1njCiOX8aw',
  authDomain: 'portfolioweb-a80dc.firebaseapp.com',
  projectId: 'portfolioweb-a80dc',
  storageBucket: 'portfolioweb-a80dc.appspot.com',
  messagingSenderId: '290521172072',
  appId: '1:290521172072:web:38140f4704ad542d59d3dd',
  measurementId: 'G-JZ99CWN6G4',
};

const firebaseApp = initializeApp(firebaseConfig);

export const storageFile = getStorage(firebaseApp);

export default firebaseApp;
