import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createPost = async (req: Request, res: Response): Promise<Response> => {
  const { forumid, content, name } = req.body;
  const username = name?.trim() || 'anonymous';

  const { data, error } = await supabase
    .from('supportpost')
    .insert([{ forumid, username, content }]);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(201).json(data);
};

export const getPostsByForum = async (req: Request, res: Response): Promise<Response> => {
  const { forumid } = req.params;

  const { data, error } = await supabase
    .from('supportpost')
    .select('*')
    .eq('forumid', forumid);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json(data);
};
