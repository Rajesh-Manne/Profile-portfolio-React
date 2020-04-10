import React, { Component } from "react";

class Tours extends Component {
  state = {
    showInfo: false,
  };

  clickHandler = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // const { showInfo } = this.state;
    // console.log(showInfo);

    const { img, skill, info } = this.props.item;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="Html image" />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>

        <div className="tour-info">
          <h3>{skill}</h3>
          {/* <h4>Name</h4> */}
          <h5>
            more info
            <span onClick={this.clickHandler}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p className={this.state.showInfo ? "show info" : "info"}>{info}</p>
        </div>
      </article>
    );
  }
}
export default Tours;
