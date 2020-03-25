import express from 'express';
import {
  getAllProblems,
} from '../controllers/problemController';

const router = new express.Router();

router.get('/problems', getAllProblems);

export default router;
