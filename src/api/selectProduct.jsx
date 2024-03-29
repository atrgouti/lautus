import supabase from "./supabase";
export async function apiSelectProduct(id) {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("product_id", id);
  if (error) {
    console.log("error", error);
  } else {
    return data;
  }
}
