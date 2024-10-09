import { Router } from 'express';
import forumRoutes from './forumRoutes';
import postRoutes from './postRoutes';
import commentRoutes from './commentRoutes';
import postLikeRoutes from './postLikeRoutes';
import commentLikeRoutes from './commentLikeRoutes';

const router = Router();

router.use('/forums', forumRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postLikeRoutes);
router.use('/comments', commentLikeRoutes);

export default router;
