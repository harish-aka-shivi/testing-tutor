import express from 'express';
import initDb from './db/mongoose';
import { PORT } from './config';
import problemRouter from './routers/problemRouter';

const app = express();
app.use(express.json());
app.use(problemRouter);

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(error => {
  console.log(error);
});

export default app;
