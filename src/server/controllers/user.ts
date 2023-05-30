import { auth, db } from '../utils/db';
import { User } from '../utils/types';
import cookie from 'cookie';

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
  const userId = _req.params.userId;
  const token = await auth.createCustomToken(userId);
  try {
    const firestoreUser = await db.collection('Users').doc(userId).get();
    if (!firestoreUser.exists) {
      res.status(404).send();
    } else {
      const tokenOptions = {
        path: '/',
        sameSite: true,
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24, //24 hours
      };
      res.setHeader('Set-Cookie', cookie.serialize('token', token, tokenOptions));
      res.status(200).send(firestoreUser.data());
    }
  } catch (err) {
    console.log(err);
  }
};

export const checkUserName = async (_req: any, res: any) => {
  const userName = _req.params.userName;
  try {
    const querySnaptShot = await db.collection('Users').where('userName', '==', userName).get();
    if (!querySnaptShot.empty) {
      res.status(422).send('No esta disponible');
    }
  } catch (err) {
    console.log(err);
  }

  res.status(200).send();
};
