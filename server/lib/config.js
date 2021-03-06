import dotenv from 'dotenv';
import path from 'path';

const devEnvPath = path.resolve(process.cwd(), './config/dev.env');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: devEnvPath, debug: true });
}

const {
  DATABASE_URL,
  PORT,
  NODE_ENV,
} = process.env;


export {
  DATABASE_URL,
  PORT,
  NODE_ENV,
};
