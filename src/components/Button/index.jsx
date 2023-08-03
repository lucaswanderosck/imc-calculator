import PropTypes from "prop-types";
import { Container } from "./styles";
import { FiArrowRight } from "react-icons/fi";

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
