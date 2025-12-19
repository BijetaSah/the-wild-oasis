import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins data not found");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin cannot be deleted");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // https://jraqynzrmiveshpkajtg.supabase.co/storage/v1/object/public/cabins-image/cabin-001.jpg

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-image/${imageName}`;
  console.log(imagePath);
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin cannot be deleted");
  }

  // upload image
  const { error: imageError } = await supabase.storage
    .from("cabins-image")
    .upload(imageName, newCabin.image);
  if (imageError) {
    console.log(imageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
