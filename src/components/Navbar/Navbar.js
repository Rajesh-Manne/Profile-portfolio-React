import React, { Component } from "react";
import logo from "../../images/logopsd.png";
import Hamburger from "./Hamburger";
import Dropdownpanel from "./Dropdownpanel";
class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-brand">
              <img src={logo} alt="logo" />
            </div>

            <ul className="nav-items">
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
            <Hamburger clickHandler={this.clickHandler} />
          </div>

          {/* <Dropdownpanel click={this.state.open} /> */}
          <ul className={this.state.open ? "nav-links show-nav" : "nav-links"}>
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
      </nav>
    );
  }
}

export default Navbar;
