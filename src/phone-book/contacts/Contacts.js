import React from "react";

export default function Contacts({ contacts }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li id={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
}
