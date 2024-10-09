import { Request, Response, NextFunction } from 'express';

export const validatePost = (req: Request, res: Response, next: NextFunction) => {
  const { content, forumId } = req.body;
  if (!content || !forumId) {
    return res.status(400).json({ message: 'Content and Forum ID are required' });
  }
  next();
};
