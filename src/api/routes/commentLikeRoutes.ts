import { Router } from 'express';
import { likeComment } from '../controllers/commentLikeController';

const router = Router();

router.post('/', likeComment);

export default router;
