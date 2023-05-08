import { cert, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import config from './config';

initializeApp({
  credential: cert({
    projectId: config.server.db.projectId,
    clientEmail: config.server.db.clientEmail,
    privateKey: config.server.db.privateKey ? config.server.db.privateKey.replace(/\\n/gm, '\n') : undefined,
  }),
});

// FIREBASE FIRESTORE https://firebase.google.com/docs/firestore
export const db = getFirestore();

// FIREBASE AUTHENTICATION https://firebase.google.com/docs/auth/admin
export const auth = getAuth();

// FIREBASE STORAGE https://firebase.google.com/docs/storage/admin/start
export const storage = getStorage();
