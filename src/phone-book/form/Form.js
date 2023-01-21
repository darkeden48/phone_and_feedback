import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  let numberId = nanoid();
  let nameId = nanoid();

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "number":
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="phone-form">
      <label htmlFor={nameId}>
        Name
        <input
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          id={nameId}
          required
        />
      </label>
      <label htmlFor={numberId}>
        Number
        <input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          id={numberId}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

// export default class Form extends React.Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   numberId = nanoid();
//   nameId = nanoid();

//   handleChange = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameId}>
//           Name
//           <input
//             type="text"
//             value={name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             onChange={this.handleChange}
//             id={this.nameId}
//             required
//           />
//         </label>
//         <label htmlFor={this.numberId}>
//           Number
//           <input
//             type="tel"
//             value={number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             onChange={this.handleChange}
//             id={this.numberId}
//             required
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
// };
