import React from "react";
import PropTypes from "prop-types";

export default function Filter({ filter, onChange }) {
  return (
    <label className="filter">
      Filter by name
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Enter value"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
