import { Router } from 'express';
import { likePost } from '../controllers/postLikeController';

const router = Router();

router.post('/', likePost);

export default router;
