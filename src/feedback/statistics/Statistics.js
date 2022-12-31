import React from "react";

export default function Statictics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul style={{ fontSize: "34px" }}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
