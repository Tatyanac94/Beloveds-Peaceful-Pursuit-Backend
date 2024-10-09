import { supabase } from '../../config/supabaseClient';

export const createForum = async (title: string) => {
  return await supabase.from('Forum').insert([{ title }]);
};

export const getForums = async () => {
  return await supabase.from('Forum').select('*');
};
