import { useEffect, useState } from "react";
import supabase from "../src/api/supabase";
import withAuthCheck from "./withAuthCheck";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
import { apiLautusAnimeCate } from "./api/apiLautusAnimeCate";
import loadingCircle from "/icons8-loading-circle.gif";

function AnimeCategoriesShow() {
  const [mydatacate, setMyDataCate] = useState([]);
  const [loading, setLoading] = useState(false);

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
  //get data
  useEffect(() => {
    async function getDataCate() {
      let res = await apiLautusAnimeCate();
      setMyDataCate(res);
    }
    getDataCate();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("idd", id)
        .single(); // Ensure only one record is deleted

      if (error) {
        throw error; // Throw error if deletion operation fails
      }

      // Optionally, you can return some confirmation here
      return { success: true, message: "Product deleted successfully." };
    } catch (error) {
      console.error("Error deleting product:", error.message);
      // Handle error appropriately, e.g., show a message to the user
      return { success: false, message: "Failed to delete product." };
    }
  };

  return (
    <div>
      <div className={styles.nav}>
        <Link to={"/Dashboard"}>
          <h2 style={{ color: "white", margin: "20px" }}>Dashboard</h2>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/Dashboard/AddAnimeCategory">
            <button>Add New Anime Category</button>
          </Link>
          <button onClick={() => handleSignOut()}>Sign out</button>
        </div>
      </div>
      {loading ? (
        <img src={loadingCircle} alt="" />
      ) : (
        <div className={styles.showProducts}>
          <h4 style={{ textAlign: "center", margin: "20px" }}>
            currently you have {mydatacate.length} anime categories
          </h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "2px solid black", padding: "10px" }}>
                  Id
                </th>
                <th style={{ border: "2px solid black", padding: "10px" }}>
                  Name
                </th>
                <th style={{ border: "2px solid black", padding: "10px" }}>
                  image
                </th>
              </tr>
            </thead>
            <tbody>
              {mydatacate.map((p) => (
                <tr key={p.id}>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    {p?.id}
                  </td>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    {p?.title}
                  </td>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "100px",
                      }} // Ensure image is responsive
                      src={p?.img}
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default withAuthCheck(AnimeCategoriesShow);
