import express from 'express';
import {
  addProblem,
  getAllProblems,
  getAProblem,
} from '../controllers/problemController';

const router = new express.Router();

router.get('/problems', getAllProblems);

router.get('/problem/:id', getAProblem);

router.post('/problem', addProblem);

export default router;
