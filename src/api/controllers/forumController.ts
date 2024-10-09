import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createForum = async (req: Request, res: Response): Promise<Response> => {
  const { name, description } = req.body;

  const { data, error } = await supabase
    .from('forum')
    .insert([{ name, description }]);

  if (error) return res.status(400).json({ error: error.message });
  return res.status(201).json(data);
};

export const getForums = async (req: Request, res: Response): Promise<Response> => {
  const { data, error } = await supabase.from('forum').select('*');
  if (error) return res.status(400).json({ error: error.message });
  return res.status(200).json(data);
};
