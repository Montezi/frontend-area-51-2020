import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  color: ${(props) => props.theme.palette.commom.white};
  font-size: 18px;
  font-family: "Kohinoor", sans-serif;
  font-weight: bold;
  height: 52px;
  background-color: ${(props) => props.theme.palette.primary};
  box-shadow: 4px 4px 16px 0px rgba(69, 91, 99, 0.08);
  border: none;
  border-radius: 8px;
  margin: 10px 0px;
`;
