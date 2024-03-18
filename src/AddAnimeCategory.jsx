import { useState } from "react";
import supabase from "../src/api/supabase";
import withAuthCheck from "./withAuthCheck";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
import loadingCircle from "/icons8-loading-circle.gif";
import { useNavigate } from "react-router-dom";

function AddAnimeCategory() {
  const [title, setTitle] = useState("");

  const [img, setImg] = useState(null);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  // Function to handle changes in the front image file input
  const handleFrontImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Upload front image to Supabase Storage
      const { data: frontImageData, error: frontImageError } =
        await supabase.storage
          .from("animeCategories")
          .upload(`${img.name}`, img);

      if (frontImageError) {
        throw frontImageError;
      }

      // Construct the product object with default values
      const product = {
        title,
        img: `https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/animeCategories/${img.name}`,
      };

      // Insert the new product into the 'products' table

      const { data, error } = await supabase
        .from("animeCategories")
        .insert([product])
        .select();

      if (error) {
        throw error;
      }

      console.log("Product added successfully:", data);
      // Reset form fields after successful submission
      setTitle("");
      setImg("");
      setLoading(false);
      navigate("/Dashboard/AnimeCategoriesShow");
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  return (
    <div>
      <div className={styles.nav}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/Dashboard/">
            <button>Dashboard</button>
          </Link>
          <button onClick={() => handleSignOut()}>Sign out</button>
        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Add new anime category
      </h1>

      {loading && (
        <img
          style={{ marginRight: "100px", position: "fixed" }}
          src={loadingCircle}
          alt=""
        />
      )}

      <form onSubmit={handleSubmit} className={styles.formula}>
        <table
          style={{
            width: "100%",
            borderSpacing: "0",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "10px",
                  textAlign: "right",
                  verticalAlign: "middle",
                }}
              >
                <label
                  htmlFor="name"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Name (don't write spacing):
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="text"
                  id="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "10px",
                  textAlign: "right",
                  verticalAlign: "middle",
                }}
              >
                <label
                  htmlFor="front-image"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Image:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="file"
                  id="front-image"
                  accept="image/*"
                  onChange={handleFrontImageChange}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td
                colSpan="2"
                style={{ textAlign: "center", paddingTop: "20px" }}
              >
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                >
                  Add Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default withAuthCheck(AddAnimeCategory);
