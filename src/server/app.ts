import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import API from './utils/api';
import config from './utils/config';

const app = express();
app.disable('x-powered-by');

// const corsOptions = {
//   origin: config.isDevelopment ? 'http://localhost:3000' : 'https://my-portfolio-staging.onrender.com',
// };
const originToAllow = config.isDevelopment ? 'http://localhost:3000' : 'https://my-portfolio-staging.onrender.com';

app.use(
  cors({
    origin: (origin, callback) => {
      console.log('origin', origin);

      if (origin?.includes(originToAllow)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(API);

export default app;
