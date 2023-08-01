import { useState } from "react";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <form>
        <h1>Calcule seu IMC</h1>
        <div>
          <label htmlFor="weight">Peso (kg)</label>
          <Input id="weight" placeholder="60" />
        </div>
        <div>
          <label htmlFor="height">Altura (cm)</label>
          <Input id="height" placeholder="165" />
        </div>
        <Button
          title="Calcular IMC"
          icon={FiArrowRight}
          onClick={handleOpenModal}
        ></Button>
      </form>
      {openModal && (
        <Modal result="Seu IMC é: 22.65" onClose={handleCloseModal} />
      )}
    </Container>
  );
};
