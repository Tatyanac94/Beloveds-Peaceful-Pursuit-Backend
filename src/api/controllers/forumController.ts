import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createForum = (req: Request, res: Response) => {
  const { name, description } = req.body;

  supabase
    .from('forum')
    .insert([{ name, description }])
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(201).json(data);
    });
};

export const getForums = (req: Request, res: Response) => {
  supabase
    .from('forum')
    .select('*')
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);
    });
};
