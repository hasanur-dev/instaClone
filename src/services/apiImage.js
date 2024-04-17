import { supabase, supabaseUrl } from './supabase'

export const getImages = async function (pageParam = 1) {
  let { data: images, error } = await supabase
    .from('images')
    .select('*, users(*)')
    .order('created_at', { ascending: false })
  if (error) throw new Error(error)
  //   console.log(images)

  return { images, nextPage: pageParam + 1 }
}

export const uploadImage = async function ({ image, desc = '', user }) {
  console.log(user)
  const imageName = `${Math.random()}-${image.name}`.replaceAll('/', '')

  const imagePath = `${supabaseUrl}/storage/v1/object/public/images/${imageName}`
  console.log('hi', imagePath)
  console.log(image, imageName)

  const { data: imageData, error: imageError } = await supabase.storage
    .from('images')
    .upload(imageName, image)

  if (imageError) {
    console.log(imageError)
    throw new Error('Image could not be uploaded')
  }

  const { data, error } = await supabase
    .from('images')
    .insert([{ url: imagePath, desc: desc, likes: 0, user_id: user?.id }])
    .select()

  console.log(error)
  if (error) throw new Error('Something went wrong')

  return data
  //   return imagePath
}
