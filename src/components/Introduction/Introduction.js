import React from "react";
//import image from "../../images/Rajesh_F (4).jpg";

function Introduction() {
  return (
    // <div className="intro-container">
    //   <img src={image} alt="image-rajesh manne" />
    //   <div className="intro">
    //     <div className="wrap-text">
    //       <p>Hi,</p>

    //       <p>I'm Rajesh,</p>
    //       <p>Web Developer.</p>
    //     </div>
    //   </div>
    //   <h2>Front End Developer / Freelancer</h2>
    // </div>

    <div className="profileimage">
      <div className="hero-text">
        <h1>
          <span>H</span>
          <span>i,</span>
          <br />
          <span>I'</span>
          &nbsp;
          <span>a</span>
          <span>m</span>
          &nbsp;
          <span id="namechar">R</span>
          <span>a</span>
          <span>j</span>
          <span>e</span>
          <span>s</span>
          <span>h,</span>
          <br />
          <span className="wrap-text">
            <span>
              <span>w</span>
              <span>e</span>
              <span>b</span>
              <span>&nbsp;</span>
            </span>

            <span>
              <span>d</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r.</span>
            </span>
          </span>
        </h1>
        <h2 className="muted">Front End Developer / Freelancer</h2>
        {/* <button>Hire me</button> */}
      </div>
    </div>
  );
}

export default Introduction;
