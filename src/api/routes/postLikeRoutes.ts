import { Router } from 'express';
import { likePost } from '../controllers/postLikeController';

const router = Router();

router.post('/:postId/likes', likePost);

export default router;
