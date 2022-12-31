import React from "react";

export default function Filter({ filter, onChange }) {
  return (
    <label>
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
