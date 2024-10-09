import { Request, Response } from 'express';
import { supabase } from '../../config/supabaseClient';

export const createPost = (req: Request, res: Response) => {
  const { forumid, content, name } = req.body;
  const username = name?.trim() || 'anonymous';

  supabase
    .from('supportpost')
    .insert([{ forumid, username, content }])
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(201).json(data);
    });
};

export const getPostsByForum = (req: Request, res: Response) => {
  const { forumid } = req.params;

  supabase
    .from('supportpost')
    .select('*')
    .eq('forumid', forumid)
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);
    });
};

// New function to get all posts
export const getAllPosts = (req: Request, res: Response) => {
  supabase
    .from('supportpost')
    .select('*')
    .then(({ data, error }) => {
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);
    });
};
