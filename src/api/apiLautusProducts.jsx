import supabase from "./supabase";

export async function apiLautusProducts(
  category = "none",
  setIsLoading,
  animeName
) {
  try {
    setIsLoading(true);

    const query = supabase.from("products").select("*");

    if (category !== "none") {
      query.eq("category", `${category}`);
    }

    if (animeName) {
      query.eq("anime_name", `${animeName}`);
    }

    const { data, error } = await query;
    if (error) {
      console.error(error);
      throw new Error("error");
    }
    setIsLoading(false);
    return data;
  } catch (error) {
    setIsLoading(false);
    throw error;
  }
}
