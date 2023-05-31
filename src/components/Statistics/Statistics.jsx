// import { Notification } from './Notification';
import PropTypes from 'prop-types';

export function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  children,
}) {
  const totalFeedback = total();
  return (
    <div>
      <h3>Statistics</h3>
      {totalFeedback ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>
            Positive feedback: {good ? Math.round(positivePercentage()) : 0}%
          </p>
        </>
      ) : (
        children
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
