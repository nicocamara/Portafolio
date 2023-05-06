import dotenv from 'dotenv';
dotenv.config();

const config = {
  isDevelopment: process.env.NODE_ENV !== 'production',
  server: {
    port: process.env.PORT,
  },
};

export default config;
