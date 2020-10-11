import React from "react";

import { ButtonContainer } from "./styles";

function Button({ name, onClick }) {
  return <ButtonContainer type="button" onClick={onClick}>{name}</ButtonContainer>;
}

export default Button;
