import { Container } from "./styles";
import { FiAlertTriangle } from "react-icons/fi";

export const Error = () => {
  return (
    <Container>
      <div>
        <FiAlertTriangle />
        <h3>Insira valores numéricos válidos para peso e altura.</h3>
      </div>
    </Container>
  );
};
