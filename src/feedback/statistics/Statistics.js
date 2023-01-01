import React from "react";
import PropTypes from "prop-types";

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

Statictics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }),
};
