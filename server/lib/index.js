import initDb from './db/mongoose';
import { PORT } from './config';
import app from './app';

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(error => {
  console.log(error);
});

export default app;
