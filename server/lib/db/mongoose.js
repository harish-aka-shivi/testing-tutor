import mongoose from 'mongoose';
import { DATABASE_URL } from '../config';

const initDb = () => mongoose.connect(process.env.MONGO_URL || DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

export default initDb;
