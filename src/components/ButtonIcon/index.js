import React from "react";

import * as S from "./styles";

function ButtonIcon({ source, value }) {
  return (
    <S.Container>
      <S.Icon src={source} />
      <S.Button>{value}</S.Button>
    </S.Container>
  );
}

export default ButtonIcon;
