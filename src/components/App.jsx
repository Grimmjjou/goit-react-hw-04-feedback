import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Notification } from './notification/Notification';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  const positivePercentage = Math.round((good / countTotalFeedback) * 100);

  function onClickBtn(e) {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Section title="Please leave feedback!">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onClickBtn}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback === 0 ? (
          <Notification Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
