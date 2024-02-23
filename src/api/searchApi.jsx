import supabase from "./supabase";

export async function apiSearch(input) {
  const { data, error } = await supabase
    .from(`products`)
    .select("product_id, name, prices, image")
    .or(`name.ilike.%${input}%, category.ilike.%${input}%`); // Match either name or category

  if (error) {
    console.error("Error:", error);
    return null; // Return null to signify an error occurred
  }

  return data;
}
