import { FeedbackNotification } from './Statistics.styled';
import PropTypes from 'prop-types';
export function Notification({ message }) {
  return <FeedbackNotification>{message}</FeedbackNotification>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
