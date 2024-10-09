import { supabase } from '../../config/supabaseClient';

export const createPost = async (content: string, forumId: string) => {
  return await supabase.from('Post').insert([{ content, forumId }]);
};

export const getPosts = async (forumId: string) => {
  return await supabase.from('Post').select('*').eq('forumId', forumId);
};
