import { Router } from 'express';
import { createForum, getForums } from '../controllers/forumController';

const router = Router();

// Define routes for forums
router.post('/', createForum);
router.get('/', getForums);

export default router;
