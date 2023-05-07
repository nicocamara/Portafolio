import { Router } from 'express';
import config from './config';

// Using http protocol we define a REST API(representational state transfer)
const API = Router();

API.get('/', async (_req, res) => {
  // Capture parameters/payload
  // Do important stuff
  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('isDevelopment', config.isDevelopment);

  res.status(200).send({ hola: 'all good' });
});

export default API;
