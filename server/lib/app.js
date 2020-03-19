import express from 'express';
import problemRouter from './routers/problemRouter';

const app = express();
app.use(express.json());
app.use(problemRouter);

export default app;
