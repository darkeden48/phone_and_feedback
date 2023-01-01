import React from "react";
import PropTypes from "prop-types";

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

Buttons.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
