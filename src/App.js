import React from "react";
import AppFeedback from "./feedback/AppFeedback";
import AppPhoneBook from "./phone-book/AppPhoneBook";

export default class App extends React.Component {
  render() {
    return (
      <>
        <AppFeedback />,
        <AppPhoneBook />
      </>
    );
  }
}
