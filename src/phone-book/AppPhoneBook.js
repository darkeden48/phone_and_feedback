import React from "react";
import Contacts from "./contacts/Contacts";
import Form from "./form/Form";

export default class AppPhoneBook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
  };
  render() {
    return (
      <>
        <Form />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
