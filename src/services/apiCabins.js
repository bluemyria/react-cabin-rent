import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("js-react-cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase
  .from("js-react-cabins")
  .insert([
    newCabin,
  ])
  .select()
  
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("js-react-cabins")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
