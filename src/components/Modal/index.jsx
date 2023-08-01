import { Container } from "./styles";
import { FiX } from "react-icons/fi";
import PropTypes from "prop-types";

export const Modal = ({ result, onClose }) => {
  return (
    <Container>
      <div >
        <h2>{result}</h2>
        <FiX onClick={onClose}></FiX>
      </div>
    </Container>
  );
};

Modal.propTypes = {
  result: PropTypes.string,
  onClose: PropTypes.func.isRequired
};
