import { FeedbackButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(el => {
    return (
      <FeedbackButton
        type="button"
        key={el}
        onClick={() => onLeaveFeedback(el)}
      >
        {el}
      </FeedbackButton>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
