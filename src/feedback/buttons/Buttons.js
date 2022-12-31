import React from "react";

export default function Buttons({ options, onLeaveFeedback }) {
  const arrayState = Object.keys(options);
  return (
    <ul>
      {arrayState.map((element) => (
        <li>
          <button onClick={onLeaveFeedback}>{element}</button>
        </li>
      ))}
    </ul>
  );
}
