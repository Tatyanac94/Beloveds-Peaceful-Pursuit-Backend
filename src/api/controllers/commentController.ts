import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createComment = (req: Request, res: Response) => {
  const { postid, content, name } = req.body;
  const username = name?.trim() || 'anonymous';

  supabase
    .from('supportcomment')
    .insert([{ postid, username, content }])
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(201).json(data);
    });
};

export const getCommentsByPost = (req: Request, res: Response) => {
  const { postid } = req.params;

  supabase
    .from('supportcomment')
    .select('*')
    .eq('postid', postid)
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);
    });
};
