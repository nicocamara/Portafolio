import { Router } from 'express';
// import { auth, db } from './db';
// Using http protocol we define a REST API(representational state transfer)
const API = Router();

API.get('/', async (_req, res) => {
  // const password = 'topSecret!';
  // const userData = {
  //   email: 'elchamuyinremix2@gmail.com',
  //   firstName: 'Elcha',
  //   lastName: 'Muyin',
  // };

  // try {
  //   const firebaseAuthUser = await auth.createUser({ email: userData.email, password });
  //   const firestoreUser = await db.collection('Users').doc(firebaseAuthUser.uid).set(userData);
  // } catch (err) {
  //   console.log(err);
  // }
  res.status(200).send({ hoola: 'all good' });
});

export default API;
