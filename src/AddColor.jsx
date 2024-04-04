import { useState } from "react";
import supabase from "../src/api/supabase";
import withAuthCheck from "./withAuthCheck";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
import loadingCircle from "/icons8-loading-circle.gif";
import { useNavigate } from "react-router-dom";

function AddColor() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("hoodie");
  const [size, setSize] = useState("S");
  const [colorCode, setColorCode] = useState("");
  const [ColorName, setColorName] = useState("");
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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Construct the product object with default values
      const product = {
        type,
        instock: "true",
        size,
        colorCode,
        ColorName,
      };

      // Insert the new product into the 'products' table

      const { data, error } = await supabase
        .from("sizestock")
        .insert([product])
        .select();

      if (error) {
        throw error;
      }

      console.log("Product added successfully:", data);
      // Reset form fields after successful submission
      setColorCode("");
      setColorName("");
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
      <h1 style={{ textAlign: "center", margin: "20px" }}>Add new color</h1>

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
            <tr
              style={{
                textAlign: "center",
                paddingTop: "20px",

                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <td>
                <p style={{ marginRight: "20px" }}>TYPE:</p>
              </td>
              <td>
                <select name="" id="" onChange={(e) => setType(e.target.value)}>
                  <option value="hoodie">hoodie</option>
                  <option value="sweetshirt">sweetshirt</option>
                  <option value="tshirt">Normale Fit T-shirt</option>
                  <option value="oversized">oversized</option>
                  <option value="cap">cap</option>
                  <option value="buckets">buckets</option>
                  <option value="mug">mug</option>
                </select>
              </td>
            </tr>
            <tr
              style={{
                textAlign: "center",
                paddingTop: "20px",

                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <td>
                <p style={{ marginRight: "20px" }}>SIZE:</p>
              </td>
              <td>
                <select name="" id="" onChange={(e) => setSize(e.target.value)}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </td>
            </tr>
            <tr
              style={{
                textAlign: "center",
                paddingTop: "20px",

                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <td>
                <p style={{ marginRight: "20px" }}>COLOR CODE:</p>
              </td>
              <td>
                <input
                  type="text"
                  value={colorCode}
                  onChange={(e) => setColorCode(e.target.value)}
                />
              </td>
            </tr>
            <tr
              style={{
                textAlign: "center",
                paddingTop: "20px",

                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <td>
                <p style={{ marginRight: "20px" }}>COLOR NAME:</p>
              </td>
              <td>
                <input
                  type="text"
                  value={ColorName}
                  onChange={(e) => setColorName(e.target.value)}
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

export default withAuthCheck(AddColor);
