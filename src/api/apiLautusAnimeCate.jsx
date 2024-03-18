import supabase from "./supabase";

export async function apiLautusAnimeCate() {
  const query = supabase.from("animeCategories").select("*");

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("error");
  }
  return data;
}
