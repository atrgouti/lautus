import supabase from "./supabase";

export async function apiGetStock() {
  const query = supabase.from("sizestock").select("*");

  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("error");
  }
  return data;
}
