import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const likePost = async (req: Request, res: Response): Promise<Response> => {
  const { postid, name } = req.body;
  const username = name?.trim() || 'anonymous';

  const { data, error } = await supabase
    .from('postlike')
    .insert([{ postid, username }]);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(201).json(data);
};

export const getPostLikes = async (req: Request, res: Response): Promise<Response> => {
  const { postid } = req.params;

  const { data, error } = await supabase
    .from('postlike')
    .select('*')
    .eq('postid', postid);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json(data);
};
