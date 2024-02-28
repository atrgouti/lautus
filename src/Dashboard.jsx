import { useState } from "react";
import supabase from "../src/api/supabase";
import withAuthCheck from "./withAuthCheck";
function Dashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //handle sign out
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      // Redirect to login page after sign out
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the product object with default values
    const product = {
      name,
      price: parseInt(price), // Convert price to integer
      image: {
        productPhotos: [
          "https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/gon-x-killia-hoodie-black.png",
          "https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/gon-x-killia-hoodie-white.png",
        ],
      },
      description,
      category: "cartoon",
      anime_name: "none",
      prices: {
        prices: {
          hoodie: 199,
          tshirt: 758,
          sweetshirt: 452,
        },
      },
    };

    try {
      // Insert the new product into the 'products' table
      const { data, error } = await supabase
        .from("products")
        .insert([product])
        .select();

      if (error) {
        throw error;
      }

      console.log("Product added successfully:", data);
      // Reset form fields after successful submission
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  return (
    <div>
      <h1>welcome to your dashboard</h1>

      <button onClick={() => handleSignOut()}>Sign out</button>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default withAuthCheck(Dashboard); // Wrap Dashboard with the HOC
