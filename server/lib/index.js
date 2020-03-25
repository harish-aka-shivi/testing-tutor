import { PORT } from './config';
import app from './app';

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
export default app;
