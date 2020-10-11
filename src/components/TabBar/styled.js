import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary};
  max-width: 375px;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  svg {
    color: #FFF;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  padding: 15px 25px;
`;

export const Location = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 8px;
  background-color: ${(props) => props.theme.palette.secondary};
  border-radius: 50%;
  position: relative;
  bottom: 30px;
  right: 30px;
`;