import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const likePost = (req: Request, res: Response) => {
  const { postid, name } = req.body;
  const username = name?.trim() || 'anonymous';

  supabase
    .from('postlike')
    .insert([{ postid, username }])
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(201).json(data);
    });
};
