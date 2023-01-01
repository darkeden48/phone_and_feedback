import React from "react";
import PropTypes from "prop-types";

export default function Contacts({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" id={id} onClick={() => deleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
