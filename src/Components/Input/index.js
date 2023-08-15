import React, { useState } from "react";
import { Container, InputStyle, Button } from "./style";

export const Input = ({ onSearch }) => {
  const [cep, setCep] = useState("");

  const handleSearch = () => {
    onSearch(cep);
  };
  return (
    <Container>
      <InputStyle
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <Button onClick={handleSearch}>🔍</Button>

    </Container>
  );
};
