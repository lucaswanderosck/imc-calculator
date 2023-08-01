import PropTypes from "prop-types";
import { Container } from "./styles";

export const Button = ({ title, icon: Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {title}
      {<Icon />}
    </Container>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func,
};
