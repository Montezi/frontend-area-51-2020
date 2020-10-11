import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

function Input({ placeholder, value, name, type, onChange }) {
  return (
    <S.Container>
      <S.TextInput
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
    </S.Container>
  );
}
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: "",
  type: "text",
  onChange: () => {},
};

export default Input;
