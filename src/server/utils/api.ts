import { Router } from 'express';
import { User, Portfolio } from './types';
import { auth, db } from './db';

const API = Router();

API.post('/register', async (_req, res) => {
  const { password, ...rest } = _req.body as Omit<User, 'uid'> & { password: string };

  try {
    const querySnaptShot = await db.collection('Users').where('userName', '==', rest.userName).get();

    if (!querySnaptShot.empty) {
      res.status(423).send({ message: `el username ${rest.userName} No esta disponible` });
      return;
    }

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

API.get('/portfolio/:userName', async (_req, res) => {
  const userName = _req.params.userName;
  try {
    const userRef = await db.collection('Portfolio').doc(userName + '-portfolio');
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

API.get('/portfolios', async (_req, res) => {
  try {
    const portfolioRef = await db.collection('Portfolio').get();
    const portfolios: Portfolio[] = [];

    portfolioRef.forEach(doc => {
      portfolios.push(doc.data() as Portfolio);
    });

    console.log('Los portfolios:', portfolios);
    res.status(200).send(portfolios);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

API.post('/portfolio/:userName', async (_req, res) => {
  const portfolio = _req.body as Portfolio;
  const userName = _req.params.userName;

  try {
    const docRef = db.collection('Portfolio').doc(userName + '-portfolio');

    await docRef.set(portfolio);

    const response = await docRef.get();

    res.status(201).send(response.data());
  } catch (error) {
    res.status(422).send('no se creo el portfolio');
  }
});

export default API;
