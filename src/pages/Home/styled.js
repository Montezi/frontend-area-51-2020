import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 375px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Text = styled.p`
  width: 65%;
  text-align: center;
  font-family: "Kohinoor", sans-serif;
  color: ${(props) => props.theme.palette.secondary};
  span {
    font-weight: 600;
  }
`;

export const Locations = styled.img`
  width: ${(props) => props.width};
  height: 150px;
  margin: 4px; 
  object-fit: cover;
`;

export const Actions = styled.div`
  text-align: end;
  max-height: 0px;
  position: relative;
  top: 10px;
  right: 11px;
  svg {
    color: ${(props) => props.theme.palette.secondary};
    font-size: 16px;
    margin: 0 3px;
  }
`;
