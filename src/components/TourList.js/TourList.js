import React, { Component } from "react";
import Tours from "../Tours/Tours";
import { Data } from "../../Data";

class TourList extends Component {
  state = {
    skill: Data,
  };

  render() {
    // console.log(this.state.skill);
    const { skill } = this.state;
    // console.log(skill);
    return (
      <section className="tourlist">
        {skill.map((item) => (
          <Tours key={item.id} item={item} />
        ))}
      </section>
    );
  }
}

export default TourList;
