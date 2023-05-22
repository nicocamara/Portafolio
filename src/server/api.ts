import { Request, Response, Router } from 'express';
import createError from 'http-errors';
import { verify } from 'jsonwebtoken';
import { login, register } from './controllers/user';
import { db } from './utils/db';
import { Portfolio } from './utils/types';
import { log } from 'console';

const API = Router();
const statusError = createError(401, 'Unauthorized action');

// eslint-disable-next-line consistent-return
const authMiddleware = (req: Request, _res: Response, next: any): void => {
  // 1. Get auth header
  // const authHeader = req.get('Authorization');
  const authHeader = req.cookies.token;
  if (!authHeader) {
    return next(statusError);
  }

  // 2. obtain token
  let decodedToken: any;
  try {
    const token = authHeader!.split(' ')[1];
    decodedToken = verify(token, 'toremsoftware');
  } catch (error) {
    return next(statusError);
  }

  // 3. verify
  if (!decodedToken) {
    return next(statusError);
  }

  // 4. once verified, save the userId into req.user so its available to next callback
  req.user = decodedToken!.userId;
  next();
};

API.post('/register', register);
API.post('/login', login);

API.get('/check-userName/:userName', async (_req, res) => {
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
});

// API.get('/login/:userId', async (_req, res) => {
//   const userId = _req.params.userId;
//   try {
//     const userRef = await db.collection('Users').doc(userId);
//     const doc = await userRef.get();
//     if (!doc.exists) {
//       res.status(404).send();
//     } else {
//       res.status(200).send(doc.data());
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

API.post('/portfolio/:userName', authMiddleware, async (_req, res) => {
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
// where('userId', '==', payload.uid)
