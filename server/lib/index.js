import express from 'express';
import initDb from './db/mongoose';
import { DEV_NODE_SERVER_PORT } from './config';

const app = express();

initDb().then(() => {
  app.listen(process.env.PORT || DEV_NODE_SERVER_PORT, () => {
    console.log(`App listening on port ${DEV_NODE_SERVER_PORT}!`);
  });
}).catch(error => {
  console.log(error);
});

export default app;
