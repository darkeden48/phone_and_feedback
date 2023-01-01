import React from "react";
import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>{title}</h1>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
