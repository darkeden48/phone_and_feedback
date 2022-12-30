import React from "react";

export default class AppFeedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    console.log(this.state);
  }
  render() {
    return;
  }
}
