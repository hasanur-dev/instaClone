import { supabase } from './supabase'

export const addComment = async ({ comment, user_id, image_id }) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ content: comment, user_id, image_id }])
    .select()

  if (error) throw new Error(error)
  return data
}

export const getComments = async (imageId) => {
  let { data: comments, error } = await supabase
    .from('comments')
    .select('*, users(*)')
    .eq('image_id', imageId)

  if (error) throw new Error(error)

  return comments
}

export const checkLikes = async ({ image_id, user_id }) => {
  let { data: like, error } = await supabase
    .from('likes')
    .select('*')
    .eq('image_id', image_id)
    .eq('user_id', user_id)

  if (error) throw new Error(error)

  return like
}
export const likePost = async ({ user_id, image_id }) => {
  const like = await checkLikes({ image_id, user_id })

  let query = supabase.from('likes')
  if (like.length > 0) {
    query = query.delete().eq('image_id', image_id).eq('user_id', user_id)
  } else {
    query = query.insert([{ user_id, image_id }]).select()
  }
  const { data, error } = await query

  if (error) throw new Error(error)
  return data
}

export const getTotalLikes = async (image_id) => {
  let { data: allLikes, error } = await supabase
    .from('likes')
    .select('*')
    .eq('image_id', image_id)

  if (error) throw new Error(error)

  return allLikes
}
