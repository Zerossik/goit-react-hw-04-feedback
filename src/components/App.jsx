import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Statistics/Notification';

export function App() {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / (good + neutral + bad)) * 100;
  };

  const hendleClick = value => {
    switch (value) {
      case 'good':
        setgood(good + 1);
        break;
      case 'neutral':
        setneutral(neutral + 1);
        break;
      case 'bad':
        setbad(bad + 1);
        break;
      default:
        throw new Error('error value');
    }
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={hendleClick}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      >
        <Notification message={'There is no feedback'} />
      </Statistics>
    </Section>
  );
}
