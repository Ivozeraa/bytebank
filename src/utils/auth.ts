import { supabase } from '../services/supabase';

export const register = async (email: string, password: string, name: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data?.user) {
    const { error: profileError } = await supabase
      .from('users')
      .upsert([
        {
          id: data.user.id,
          name,
        }
      ]);

    if (profileError) {
      throw new Error(profileError.message);
    }
  }

  return data?.user;
};

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
};

export const getUserProfile = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  const user = data?.user;

  if (user) {
    const { data, error: profileError } = await supabase
      .from('users')
      .select('name')
      .eq('id', user.id)
      .single();

    if (profileError) {
      throw new Error(profileError.message);
    }

    return data;
  }

  throw new Error('Usuário não autenticado');
};
