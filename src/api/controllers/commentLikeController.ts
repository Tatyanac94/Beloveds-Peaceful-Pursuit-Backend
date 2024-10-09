import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const likeComment = async (req: Request, res: Response): Promise<Response> => {
  const { commentid } = req.params;
  const { user_id } = req.body;

  const { data, error } = await supabase
    .from('commentlike')
    .insert([{ commentid, user_id }]);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(201).json(data);
};

export const getCommentLikes = async (req: Request, res: Response): Promise<Response> => {
  const { commentid } = req.params;

  const { data, error } = await supabase
    .from('commentlike')
    .select('*')
    .eq('commentid', commentid);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json(data);
};
