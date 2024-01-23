import shippingLogo from "/shipping.svg";
function Announce() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "",
        }}
      >
        <p style={{ margin: "20px 10px" }}>Delivery All Over Morocco</p>
        <img style={{ height: "30px" }} src={shippingLogo} alt="" />
      </div>
    </div>
  );
}

export default Announce;
