import React from "react";
import { nanoid } from "nanoid";

export default class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  numberId = nanoid();
  nameId = nanoid();

  render() {
    return (
      <form>
        <label htmlFor={this.nameId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameId}
            required
          />
        </label>
        <label htmlFor={this.numberId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberId}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
