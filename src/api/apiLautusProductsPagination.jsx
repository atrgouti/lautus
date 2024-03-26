import supabase from "./supabase";

export async function apiLautusProductsPagination(
  category = "none",
  setIsLoading,
  animeName,
  orderBy = "default",
  offset = 0,
  limit = 5 // default limit set to 20
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

    if (orderBy === "price_ASC") {
      query.order("price", { ascending: true });
    }
    if (orderBy === "price_DESC") {
      query.order("price", { ascending: false });
    }
    if (orderBy === "title_ASC") {
      query.order("name", { ascending: true });
    }
    if (orderBy === "title_DESK") {
      query.order("name", { ascending: false });
    }
    if (orderBy === "date_ASC") {
      query.order("created_at", { ascending: true });
    }
    if (orderBy === "date_DESC") {
      query.order("created_at", { ascending: false });
    }

    query.range(offset, offset + limit - 1); // Adjust the range based on offset and limit

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
