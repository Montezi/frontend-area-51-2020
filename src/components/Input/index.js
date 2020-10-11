import React from "react";

import * as S from "./styles";

function Input({ placeholder, value, name }) {
  return (
    <S.Container>
      <S.TextInput
        placeholder={placeholder}
        value={value}
        name={name}
        type="text"
      />
    </S.Container>
  );
}

export default Input;
