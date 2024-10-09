import { Router } from 'express';
import { createPost, getPostsByForum, getAllPosts } from '../controllers/postController';

const router = Router();

router.post('/', createPost);

router.get('/:forumid', getPostsByForum);

router.get('/', getAllPosts);

export default router;
