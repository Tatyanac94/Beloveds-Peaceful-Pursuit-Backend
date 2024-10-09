import { Router } from 'express';
import { likePost } from '../controllers/postLikeController';

const router = Router();

// Define routes for post likes
router.post('/', likePost);

export default router;
