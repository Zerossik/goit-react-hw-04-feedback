import { FeedbackSection, FeedbackSectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <FeedbackSection>
      <FeedbackSectionTitle>{title}</FeedbackSectionTitle>
      {children.map(el => el)}
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
