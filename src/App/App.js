// src/App.js
import React, { useState } from "react";
import { Container, Dados, Infor } from "./style.js";
import { Input } from "../Components/Input/index.js";

function App() {
  const [cepData, setCepData] = useState(null);

  const fetchCepData = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setCepData(data);
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      setCepData(null);
    }
  };

  return (
    <Container>
      <h1>Buscador de CEP</h1>
      <Input onSearch={fetchCepData} />
      <Container>
        {cepData && (
          <Dados>
            <h2>Resultado do CEP informado:</h2>
            <Infor>
              <span>Rua:</span> {cepData.logradouro}
            </Infor>
            <Infor>
              <span>Bairro:</span> {cepData.bairro}
            </Infor>
            <Infor>
              <span>Municipio:</span> {cepData.localidade}
            </Infor>
            <Infor>
              <span>DDD da região:</span> {cepData.ddd}
            </Infor>
          </Dados>
        )}
      </Container>
    </Container>
  );
}

export default App;
