import { Router } from 'express';
import { likeComment } from '../controllers/commentLikeController';

const router = Router();

// Define routes for comment likes
router.post('/', likeComment);

export default router;
