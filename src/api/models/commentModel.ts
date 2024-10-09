import { supabase } from '../../config/supabaseClient';

export const createComment = async (content: string, postId: string) => {
  return await supabase.from('Comment').insert([{ content, postId }]);
};

export const getComments = async (postId: string) => {
  return await supabase.from('Comment').select('*').eq('postId', postId);
};
