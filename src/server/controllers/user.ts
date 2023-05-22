import config from '../utils/config';
import { auth, db } from '../utils/db';
import { User } from '../utils/types';
import fetch from 'node-fetch';

export const register = async (_req: any, res: any) => {
  const { password, ...rest } = _req.body as Omit<User, 'uid'> & { password: string };
  try {
    const firebaseAuthUser = await auth.createUser({ email: rest.email, password });

    await db
      .collection('Users')
      .doc(firebaseAuthUser.uid)
      .set({ ...rest, uid: firebaseAuthUser.uid });

    res.status(201).send();
  } catch (err: any) {
    const { code, message } = err.errorInfo;
    if (code === 'auth/email-already-exists') {
      res.status(422).send(message);
      return;
    }
    res.status(500).send(message);
  }
};

export const login = async (_req: any, res: any) => {
  const { email, password } = _req.body as { email: string; password: string };
  console.log('endpoint');

  try {
    // const user = await auth.getUserByEmail(email);
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.server.db.privateKey}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log('response', response);
    // await db.collection('Users').doc(firebaseAuthUser.uid).set(firestoreUser);
    // const token = await auth.createCustomToken(firebaseAuthUser.uid);

    res.status(201).send();
  } catch (err: any) {
    console.log('vevooooo-----', err);

    const { code, message } = err.errorInfo;
    if (code === 'auth/email-already-exists') {
      res.status(422).send(message);
      return;
    }
    res.status(500).send(message);
  }
};
