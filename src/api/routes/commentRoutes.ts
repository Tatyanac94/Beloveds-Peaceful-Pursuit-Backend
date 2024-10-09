import { Router } from 'express';
import { createComment, getCommentsByPost } from '../controllers/commentController';

const router = Router();

// Define routes for comments
router.post('/', createComment);
router.get('/:postId', getCommentsByPost);

export default router;
