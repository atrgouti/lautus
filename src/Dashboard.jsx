import { useEffect, useState } from "react";
import supabase from "../src/api/supabase";
import withAuthCheck from "./withAuthCheck";
import styles from "./dashboard.module.css";
import { Link } from "react-router-dom";
// import { apiLautusProducts } from "./api/apiLautusProducts";
import { apiLautusProductsPagination } from "./api/apiLautusProductsPagination";
import loadingCircle from "/icons8-loading-circle.gif";

function Dashboard() {
  const [mydata, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffSet] = useState(0);

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
  // useEffect(() => {
  //   async function getData() {
  //     let res = await apiLautusProducts("none", setLoading);
  //     setMyData(res);
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    if (offset === 0) {
      async function getData() {
        let res = await apiLautusProductsPagination(
          "none",
          setLoading,
          false,
          "default",
          offset
        );
        setMyData(res);
      }
      getData();
    }
  }, []);
  useEffect(() => {
    if (offset > 0) {
      async function getData() {
        try {
          const newData = await apiLautusProductsPagination(
            "none",
            setLoading,
            false,
            "default",
            offset,
            5
          );

          setMyData((prevData) => [...prevData, ...newData]); // Append only new items to myData
        } catch (error) {
          console.error(error);
        }
      }

      getData();
    }
  }, [offset]); // Include offset as a dependency

  const handleShowMore = () => {
    setOffSet((prevOffset) => prevOffset + 5); // Increment offset by 10
  };

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
        <h2 style={{ color: "white", margin: "20px" }}>Dashboard</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/Dashboard/AddProduct">
            <button>Add New Product</button>
          </Link>
          <Link to="/Dashboard/AnimeCategoriesShow">
            <button>Show Anime Categories</button>
          </Link>
          <Link to="/Dashboard/addcolor">
            <button>ADD NEW COLOR</button>
          </Link>
          <button onClick={() => handleSignOut()}>Sign out</button>
        </div>
      </div>
      {loading ? (
        <img src={loadingCircle} alt="" />
      ) : (
        <div className={styles.showProducts}>
          <h4 style={{ textAlign: "center", margin: "20px" }}>
            currently you have {mydata.length} items in your website
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
                  Initial Price
                </th>
                <th style={{ border: "2px solid black", padding: "10px" }}>
                  Image
                </th>
                <th style={{ border: "2px solid black", padding: "10px" }}>
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((p) => (
                <tr key={p.product_id}>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    {p.product_id}
                  </td>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    {p.name}
                  </td>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    {p.price} MAD
                  </td>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "100px",
                      }} // Ensure image is responsive
                      src={p.image?.productPhotos[0]}
                      alt=""
                    />
                  </td>
                  <td style={{ border: "2px solid black", padding: "10px" }}>
                    {p.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            margin: "20px",
            border: "1px solid black",
            cursor: "pointer",
          }}
          onClick={() => handleShowMore()}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default withAuthCheck(Dashboard);
