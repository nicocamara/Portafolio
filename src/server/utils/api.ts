import { Router } from 'express';
import { User } from './types';
import { auth, db } from './db';

// Using http protocol we define a REST API(representational state transfer)
const API = Router();

// API.get('/', async (_req, res) => {
//   res.status(200).send({ hoola: 'all good' });
// });

API.post('/register', async (_req, res) => {
  const { password, ...rest } = _req.body as Omit<User, 'uid'> & { password: string };

  try {
    const firebaseAuthUser = await auth.createUser({ email: rest.email, password });
    const firestoreUser = { ...rest, uid: firebaseAuthUser.uid };

    await db.collection('Users').doc(firebaseAuthUser.uid).set(firestoreUser);
    const token = await auth.createCustomToken(firebaseAuthUser.uid);

    res.status(201).send({ ...firestoreUser, token });
  } catch (err: any) {
    const { code, message } = err.errorInfo;
    if (code === 'auth/email-already-exists') {
      res.status(422).send(message);
      return;
    }
    res.status(500).send(message);
  }
});

API.get('/login/:userId', async (_req, res) => {
  const userId = _req.params.userId;
  try {
    const userRef = await db.collection('Users').doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
      res.status(404).send();
    } else {
      res.status(200).send(doc.data());
    }
  } catch (err) {
    console.log(err);
  }
});

export default API;
