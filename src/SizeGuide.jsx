import styles from "./sizeguide.module.css";
import closeMenu from "/closeMenu.svg";
function SizeGuide({ setSizeGuide }) {
  return (
    <div className={styles.sizeguide}>
      <h1 style={{ textAlign: "center", margin: "20px" }}>SIZE GUIDE</h1>
      <img
        src={closeMenu}
        style={{
          position: "absolute",
          right: "30px",
          top: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        onClick={() => setSizeGuide(false)}
        alt=""
      />
      <div>
        <h2 style={{ textAlign: "center" }}>Hoodies</h2>
        <table
          className={styles.borderedtable}
          border={2}
          style={{
            borderCollapse: "collapse",
            border: "1px solid gray",
            color: "gray",
            margin: "30px",
          }}
        >
          <tr>
            <th>Size</th>
            <th>largeur (cm)</th>
            <th>longueur (cm)</th>
          </tr>

          <tr>
            <td>M</td>
            <td>50</td>
            <td>66</td>
          </tr>
          <tr>
            <td>L</td>
            <td>53</td>
            <td>68</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>56</td>
            <td>71</td>
          </tr>
          <tr>
            <td>XXL</td>
            <td>59</td>
            <td>74</td>
          </tr>
        </table>
      </div>
      {/* other */}
      <div>
        <h2 style={{ textAlign: "center" }}>Tshirt oversized</h2>
        <table
          className={styles.borderedtable}
          border={2}
          style={{
            borderCollapse: "collapse",
            border: "1px solid gray",
            color: "gray",
            margin: "30px",
          }}
        >
          <tr>
            <th>Size</th>
            <th>largeur (cm)</th>
            <th>longueur (cm)</th>
          </tr>

          <tr>
            <td>M</td>
            <td>50</td>
            <td>71</td>
          </tr>
          <tr>
            <td>L</td>
            <td>56</td>
            <td>73</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>63</td>
            <td>79</td>
          </tr>
        </table>
      </div>

      {/* other */}
      <div style={{ margin: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Tshirt normal fit</h2>
        <table
          className={styles.borderedtable}
          border={2}
          style={{
            borderCollapse: "collapse",
            border: "1px solid gray",
            color: "gray",
            margin: "30px",
          }}
        >
          <tr>
            <th>Size</th>
            <th>largeur (cm)</th>
            <th>longueur (cm)</th>
          </tr>

          <tr>
            <td>S</td>
            <td>45</td>
            <td>69</td>
          </tr>
          <tr>
            <td>M</td>
            <td>47</td>
            <td>70</td>
          </tr>
          <tr>
            <td>L</td>
            <td>49</td>
            <td>72</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>51</td>
            <td>73</td>
          </tr>
          <tr>
            <td>XXL</td>
            <td>54</td>
            <td>75</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SizeGuide;
