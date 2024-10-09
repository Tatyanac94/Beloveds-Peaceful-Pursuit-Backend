import { supabase } from '../../config/supabaseClient';

export const likePost = async (postId: string, userId: string) => {
  return await supabase.from('PostLike').insert([{ PostID: postId, user_id: userId }]);
};

export const likeComment = async (commentId: string, userId: string) => {
  return await supabase.from('CommentLike').insert([{ CommentID: commentId, user_id: userId }]);
};
