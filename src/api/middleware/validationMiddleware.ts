import { Request, Response, NextFunction } from 'express';

export const validatePost = (req: Request, res: Response, next: NextFunction) => {
  const { forumid, content, name } = req.body;

  if (!forumid || !content) {
    return res.status(400).json({ error: 'forumid and content are required' });
  }

  if (name && typeof name !== 'string') {
    return res.status(400).json({ error: 'name must be a string' });
  }

  next(); 
};

export const validateComment = (req: Request, res: Response, next: NextFunction) => {
  const { postid, content, name } = req.body;

  if (!postid || !content) {
    return res.status(400).json({ error: 'postid and content are required' });
  }

  if (name && typeof name !== 'string') {
    return res.status(400).json({ error: 'name must be a string' });
  }

  next(); 
};
