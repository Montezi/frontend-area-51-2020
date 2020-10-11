import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.secondary};
  max-width: 375px;
  height: 100vh;
`;
