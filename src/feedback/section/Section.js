import React from "react";

export default function Section({ title, children }) {
  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>{title}</h1>
      {children}
    </div>
  );
}
