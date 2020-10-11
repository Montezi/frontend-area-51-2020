import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${(props) => props.theme.palette.commom.white};
  box-shadow: 8px 8px 16px 0px rgba(69, 91, 99, 0.08);
  height: 52px;
  margin-top: 15px;
  border-radius: 8px;
`;

export const TextInput = styled.input`
  border: none;
  text-align: left;
  font-size: 12px;
  font-family: "Kohinoor Light";
  margin: 10px 20px;
  width: 100%;
  color: ${(props) => props.theme.palette.secondary};
  font-weight: 100;
`;
