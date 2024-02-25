import React from "react";

const Login = () => {
  return (
    <div style={styles.container}>
      <img
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          height: "80px",
        }}
        src="/logo.png"
        alt=""
      />
      <h1 style={{ margin: "20px" }}>Login to your dashboard</h1>
      <form style={styles.form} action="">
        <input style={styles.input} type="text" placeholder="Username" />
        <input style={styles.input} type="password" placeholder="Password" />
        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    position: "relative",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Login;
