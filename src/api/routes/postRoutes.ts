import { Router } from 'express';
import { createPost, getPostsByForum, getAllPosts } from '../controllers/postController';

const router = Router();

// Route to create a new post
router.post('/', createPost);

// Route to get posts by forum ID
router.get('/:forumid', getPostsByForum);

// Route to get all posts
router.get('/', getAllPosts); // New route for all posts

export default router;
