import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createComment = async (req: Request, res: Response): Promise<Response> => {
  const { postid, content, name } = req.body;
  const username = name?.trim() || 'anonymous';

  const { data, error } = await supabase
    .from('supportcomment')
    .insert([{ postid, username, content }]);

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
