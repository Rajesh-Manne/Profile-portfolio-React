import React from "react";

function Hamburger(props) {
  const { clickHandler } = props;
  return (
    // <div style={{ color: "white", fontSize: "10px" }}>
    //   <i class="fas fa-bars"></i>
    // </div>

    <div className="icons" onClick={clickHandler}>
      <i className="fas fa-bars"></i>
    </div>
  );
}

export default Hamburger;
