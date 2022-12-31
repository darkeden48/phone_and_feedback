import React from "react";

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
