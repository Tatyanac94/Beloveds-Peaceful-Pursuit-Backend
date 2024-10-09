import { Router } from 'express';
import { createForum, getForums } from '../controllers/forumController';

const router = Router();

router.post('/', createForum);
router.get('/', getForums);

export default router;
