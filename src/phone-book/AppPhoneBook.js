import { useEffect, useState } from "react";
import Contacts from "./contacts/Contacts";
import Form from "./form/Form";
import Filter from "./filter/Filter";
import { nanoid } from "nanoid";

export default function AppPhoneBook() {
  const [contacts, setContacts] = useState(() => {
    const preparseContacts = localStorage.getItem("contacts");
    return (
      [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ] && JSON.parse(preparseContacts)
    );
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (contact) => {
    const inputId = nanoid();
    if (
      contacts.find(
        (el) => el.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(contact.name + " is already in contacts :=)");
      return;
    }
    setContacts([...contacts, { ...contact, id: inputId }]);
  };

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((el) => el.id !== id));
  };

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <Filter filter={filter} onChange={onChangeFilter} />
      <h2>Contacts</h2>
      <Contacts contacts={filtered} deleteContact={deleteContact} />
    </>
  );
}

/// export default class AppPhoneBook extends React.Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     const preparseContacts = localStorage.getItem("contacts");
//     this.setState({
//       contacts: JSON.parse(preparseContacts),
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("dfdgh");
//     if (this.state.contacts !== prevState.contacts) {
//       //*
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmit = (contact) => {
//     const inputId = nanoid();
//     if (
//       this.state.contacts.find(
//         (el) => el.name.toLowerCase() === contact.name.toLowerCase()
//       )
//     ) {
//       alert(contact.name + " is already in contacts :=)");
//       return;
//     }
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, { ...contact, id: inputId }],
//     }));
//   };

//   onChangeFilter = (e) => {
//     this.setState({
//       filter: e.target.value,
//     });
//   };

//   deleteContact = (id) => {
//     this.setState({
//       contacts: this.state.contacts.filter((el) => el.id !== id),
//     });
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const filtered = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter)
//     );
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmit} />
//         <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
//         <h2>Contacts</h2>
//         <Contacts contacts={filtered} deleteContact={this.deleteContact} />
//       </>
//     );
//   }
// }
