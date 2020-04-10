import React from "react";

function Dropdownpanel(props) {
  //   const { click } = props;
  //   var newclasses;

  //   if (click) {
  //     newclasses = "dropdown open";
  //   }
  //    else {
  //     newclasses = "collapse";
  //   }

  return (
    <div>
      <ul className="nav-links show-nav hide-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdownpanel;
