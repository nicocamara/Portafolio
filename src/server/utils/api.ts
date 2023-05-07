import { Router } from 'express';

// Using http protocol we define a REST API(representational state transfer)
const API = Router();

API.get('/', async (_req, res) => {
  // Capture parameters/payload
  // Do important stuff
  res.status(200).send({ hola: 'all good' });
});

export default API;
