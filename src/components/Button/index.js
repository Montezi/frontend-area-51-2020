import React from "react";

import { ButtonContainer } from "./styles";

function Button({ name }) {
  return <ButtonContainer type="button">{name}</ButtonContainer>;
}

export default Button;
