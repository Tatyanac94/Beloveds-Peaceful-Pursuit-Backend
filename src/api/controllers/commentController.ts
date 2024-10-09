import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createComment = async (req: Request, res: Response): Promise<Response> => {
  const { postid, user_id, content } = req.body;

  const { data, error } = await supabase
    .from('supportcomment')
    .insert([{ postid, user_id, content }]);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(201).json(data);
};

export const getCommentsByPost = async (req: Request, res: Response): Promise<Response> => {
  const { postid } = req.params;

  const { data, error } = await supabase
    .from('supportcomment')
    .select('*')
    .eq('postid', postid);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json(data);
};
