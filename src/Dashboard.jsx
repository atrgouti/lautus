import { useState } from "react";
import supabase from "./api/supabase"; // Import Supabase client

function Dashboard() {
  const [title, setTitle] = useState("");
  const [initialPrice, setInitialPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [animeName, setAnimeName] = useState("");
  const [hoodiePrice, setHoodiePrice] = useState("");
  const [sweetshirtPrice, setSweetshirtPrice] = useState("");
  const [tshirtPrice, setTshirtPrice] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload images to Supabase Storage
      const imageLinks = await Promise.all(
        imageFiles.map(async (file) => {
          const { data, error } = await supabase.storage
            .from("anime") // Use the correct bucket name
            .upload(`products/${file.name}`, file);
          if (error) {
            throw new Error(`Error uploading image: ${error.message}`);
          }
          return data.Key; // Get the key of the uploaded image
        })
      );

      // Construct image JSON
      const imageJson = {
        productPhotos: imageLinks.map(
          (link) => `${supabase.storageUrl}/object/public/${link}`
        ),
      };

      // Construct prices JSON
      const pricesJson = {
        prices: {
          hoodie: parseInt(hoodiePrice),
          sweetshirt: parseInt(sweetshirtPrice),
          tshirt: parseInt(tshirtPrice),
        },
      };

      // Construct product data object
      const productData = {
        name: title,
        price: parseInt(initialPrice),
        image: JSON.stringify(imageJson),
        description,
        category,
        anime_name: animeName,
        prices: JSON.stringify(pricesJson),
      };

      // Insert product data into Supabase database
      const { error: insertError } = await supabase
        .from("products")
        .insert([productData]);
      if (insertError) {
        throw new Error(`Error adding product: ${insertError.message}`);
      }

      console.log("Product added successfully!");
      // Clear form fields after successful submission
      setTitle("");
      setInitialPrice("");
      setDescription("");
      setCategory("");
      setAnimeName("");
      setHoodiePrice("");
      setSweetshirtPrice("");
      setTshirtPrice("");
      setImageFiles([]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="initial price"
          value={initialPrice}
          onChange={(e) => setInitialPrice(e.target.value)}
        />
        <input
          type="file"
          placeholder="upload product image"
          onChange={handleImageChange}
          multiple
        />
        <textarea
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="anime">anime</option>
          <option value="musical-bands">musical-bands</option>
          <option value="cartoon">cartoon</option>
          <option value="matchy-matchy">matchy-matchy</option>
          <option value="tv-show">tv-show</option>
          <option value="gym">gym</option>
        </select>
        <input
          type="text"
          placeholder="anime name"
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
        />
        <input
          type="text"
          placeholder="hoodie price"
          value={hoodiePrice}
          onChange={(e) => setHoodiePrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="sweetshirt price"
          value={sweetshirtPrice}
          onChange={(e) => setSweetshirtPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="tshirt price"
          value={tshirtPrice}
          onChange={(e) => setTshirtPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Dashboard;
