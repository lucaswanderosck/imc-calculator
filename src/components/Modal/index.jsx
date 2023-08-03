import { Container } from "./styles";
import { FiX } from "react-icons/fi";
import PropTypes from "prop-types";

export const Modal = ({ message, onClose }) => {
  return (
    <Container>
      <div>
        <h2>{message}</h2>
        <FiX onClick={onClose}></FiX>
      </div>
    </Container>
  );
};

Modal.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};
