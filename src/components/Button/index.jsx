import PropTypes from "prop-types";
import { Container } from "./styles";

export const Button = ({ title, icon: Icon }) => {
  return (
    <Container type="button">
      {title}
      {<Icon />}
    </Container>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
