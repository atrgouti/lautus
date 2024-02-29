import { useState } from "react";
import supabase from "../src/api/supabase";
import withAuthCheck from "./withAuthCheck";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
import loadingCircle from "/icons8-loading-circle.gif";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [category, setCategory] = useState("musical-bands");
  const [animeName, setAnimeName] = useState("none");
  const [hoodie, setHoodie] = useState(null);
  const [sweetShirt, setSweetShirt] = useState(null);
  const [tshirt, setTshirt] = useState(null);
  const [cap, setCap] = useState(null);
  const [mug, setMug] = useState(null);
  const [buckets, setBuckets] = useState(null);
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
    setFrontImage(e.target.files[0]);
  };

  // Function to handle changes in the back image file input
  const handleBackImageChange = (e) => {
    setBackImage(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Upload front image to Supabase Storage
      const { data: frontImageData, error: frontImageError } =
        await supabase.storage
          .from("anime")
          .upload(`${frontImage.name}`, frontImage);

      if (frontImageError) {
        throw frontImageError;
      }

      // Upload back image to Supabase Storage
      const { data: backImageData, error: backImageError } =
        await supabase.storage
          .from("anime")
          .upload(`${backImage.name}`, backImage);

      if (backImageError) {
        throw backImageError;
      }

      // Construct the product object with default values
      const product = {
        name,
        price: parseInt(price), // Convert price to integer
        image: {
          productPhotos: [
            `https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/${frontImage.name}`,
            `https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/${backImage.name}`,
          ],
        },
        description,
        category: category,
        anime_name: animeName,
        prices: {
          prices: {
            hoodie: parseInt(hoodie),
            tshirt: parseInt(tshirt),
            sweetshirt: parseInt(sweetShirt),
            mug: parseInt(mug),
            cap: parseInt(cap),
            buckets: parseInt(buckets),
          },
        },
      };

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
      setFrontImage(null);
      setBackImage(null);
      setLoading(false);
      navigate("/dashboard");
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
        welcome to your dashboard
      </h1>

      {/* <form onSubmit={handleSubmit}>
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
        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="anime">anime</option>
          <option value="musical-bands">musical-bands</option>
          <option value="tv-show">tv-show</option>
          <option value="gym">gym</option>
          <option value="matchy-matchy">matchy-matchy</option>
        </select>
        <label>
          Front Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFrontImageChange}
          />
        </label>
        <label>
          Back Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleBackImageChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </form> */}
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
                  Name:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  htmlFor="price"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Initial price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  htmlFor="hoodiePrice"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Hoodie Price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="hoodiePrice"
                  value={hoodie}
                  onChange={(e) => setHoodie(e.target.value)}
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
                  htmlFor="sweetShirt"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Sweetshirt Price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="sweetShirt"
                  value={sweetShirt}
                  onChange={(e) => setSweetShirt(e.target.value)}
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
                  htmlFor="tshirt"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  T-shirt Price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="tshirt"
                  value={tshirt}
                  onChange={(e) => setTshirt(e.target.value)}
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
                  htmlFor="mug"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Mugs Price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="mug"
                  value={mug}
                  onChange={(e) => setMug(e.target.value)}
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
                  htmlFor="bucket"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Buckets Price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="bucket"
                  value={buckets}
                  onChange={(e) => setBuckets(e.target.value)}
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
                  htmlFor="cap"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Cap Price:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="number"
                  id="cap"
                  value={cap}
                  onChange={(e) => setCap(e.target.value)}
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
                  verticalAlign: "top",
                }}
              >
                <label
                  htmlFor="description"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Description:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <textarea
                  required
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  htmlFor="category"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Category:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <select
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                >
                  <option value="musical-bands">musical-bands</option>
                  <option value="anime">anime</option>
                  <option value="tv-show">tv-show</option>
                  <option value="gym">gym</option>
                  <option value="matchy-matchy">matchy-matchy</option>
                </select>
              </td>
            </tr>
            {/* anime name  */}
            {category === "anime" && (
              <tr>
                <td
                  style={{
                    padding: "10px",
                    textAlign: "right",
                    verticalAlign: "middle",
                  }}
                >
                  <label
                    htmlFor="animename"
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                  >
                    Category:
                  </label>
                </td>
                <td style={{ padding: "10px" }}>
                  <select
                    id="animename"
                    onChange={(e) => setAnimeName(e.target.value)}
                    style={{
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                    }}
                  >
                    <option value="none">none</option>
                    <option value="onepiece">onepiece</option>
                    <option value="hunter-x-hunter">hunter-x-hunter</option>
                    <option value="attack_on_titans">attack_on_titans</option>
                    <option value="jujusto-kaisen">jujusto-kaisen</option>
                    <option value="naruto">naruto</option>
                  </select>
                </td>
              </tr>
            )}
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
                  Front Image:
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
                style={{
                  padding: "10px",
                  textAlign: "right",
                  verticalAlign: "middle",
                }}
              >
                <label
                  htmlFor="back-image"
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                >
                  Back Image:
                </label>
              </td>
              <td style={{ padding: "10px" }}>
                <input
                  required
                  type="file"
                  id="back-image"
                  accept="image/*"
                  onChange={handleBackImageChange}
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

export default withAuthCheck(Dashboard);
