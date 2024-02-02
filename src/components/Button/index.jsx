import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "./styles";

export const Button = ({ title, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {title}
      <FiArrowRight />
    </Container>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};
