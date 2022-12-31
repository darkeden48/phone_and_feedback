import React from "react";
import Statistics from "./statistics/Statistics";
import Buttons from "./buttons/Buttons";
import Section from "./section/Section";
import Notification from "./notification/Notification";

export default class AppFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  countTotalFeedback() {
    const total = Object.values(this.state).reduce((acc, el) => acc + el);
    console.log(total);
    return total;
  }
  countPositiveFeedbackPercentage() {
    if (this.state.good === 0) {
      return 0;
    }
    const positiveFeedback =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positiveFeedback.toFixed(1);
  }
  leaveFeedback = (e) => {
    this.setState((prev) => {
      const name = e.target.innerText;
      return { [name]: prev[name] + 1 };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <Buttons
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          ></Buttons>
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
