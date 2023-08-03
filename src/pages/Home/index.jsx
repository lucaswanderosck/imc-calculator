import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Error } from "../../components/Error";

import { Container } from "./styles";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [finalResult, setFinalResult] = useState("");

  // Função para abrir o Modal
  const handleOpenModal = () => setOpenModal(true);

  // Função para fechar o Modal
  const handleCloseModal = () => setOpenModal(false);

  // Função para classificar o IMC de acordo com o resultado
  const getImcRating = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Acima do peso";
    } else {
      return "Obeso";
    }
  };

  // Função para calcular o IMC e exibir o Modal
  const calculateImc = () => {
    const convertedWeight = parseFloat(weight);
    const convertedHeight = parseFloat(height);

    // Verificação para saber se os números são válidos, se não, renderiza o componente de <Erro />
    if (isNaN(convertedWeight) || isNaN(convertedHeight)) {
      setErrorPopup(true);
      return;
    }

    // Calcula o IMC e guarda na const imc
    const imc = (convertedWeight / (convertedHeight / 100) ** 2).toFixed(2);

    // Guarda a classificação do IMC na const rating
    const rating = getImcRating(imc);

    // Define o resultado no estado, abre o modal e reseta os campos de peso e altura
    setFinalResult(`Seu IMC é ${imc} e sua classificação é: ${rating}`);
    handleOpenModal();
    setHeight("");
    setWeight("");
  };

  return (
    <Container>
      <form>
        <h1>Calcule seu IMC</h1>

        <div>
          <label htmlFor="weight">Peso (kg)</label>
          <Input
            id="weight"
            value={weight}
            placeholder="60"
            onChange={(e) => {
              setWeight(e.target.value);
              setErrorPopup(false);
            }}
          />
        </div>

        <div>
          <label htmlFor="height">Altura (cm)</label>
          <Input
            id="height"
            value={height}
            placeholder="165"
            onChange={(e) => {
              setHeight(e.target.value);
              setErrorPopup(false);
            }}
          />
        </div>

        <Button title="Calcular IMC" onClick={calculateImc} />
      </form>

      {errorPopup && <Error />}
      {openModal && (<Modal message={finalResult} onClose={handleCloseModal}></Modal>)}
    </Container>
  );
};
