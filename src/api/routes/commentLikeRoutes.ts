import { Router } from 'express';
import { likeComment } from '../controllers/commentLikeController';

const router = Router();

router.post('/:commentId/likes', likeComment);

export default router;
