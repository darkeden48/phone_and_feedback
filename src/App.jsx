import React from "react";
import AppFeedback from "./feedback/AppFeedback";
import AppPhoneBook from "./phone-book/AppPhoneBook";

export default class App extends React.Component {
  state = {
    feedback: false,
  };
  taskChanger = () => {
    this.setState((prevState) => {
      return { feedback: !prevState.feedback };
    });
  };
  render() {
    return (
      <>
        <button type="submit" onClick={this.taskChanger}>
          Change Task
        </button>
        {this.state.feedback === true ? <AppFeedback /> : <AppPhoneBook />}
      </>
    );
  }
}
