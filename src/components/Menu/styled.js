import styled from "styled-components";
import Close from '@material-ui/icons/Close';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? 0 : "-100%")};
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #101f3988;
  backdrop-filter: blur(4px);
  max-width: 375px;
  z-index: 1;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  margin: 15px 0 0;
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.palette.secondary};
`;

export const HighlightedText = styled.p`
  font-family: "Roboto", sans-serif;
  margin: 5px 0 0;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary};
`;

export const Options = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  width: 100%;
`;

export const Item = styled.li`
  margin: 25px 0px;
  display: flex;
  align-items: center;
  list-style-type: none;
  cursor: pointer;
  color: ${(props) => props.theme.palette.secondary};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  svg {
    color: ${(props) => props.theme.palette.primary};
  }
  
  p {
    margin: 0;
    margin-left: 30px;
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: 190px;
`;

export const SubTitle = styled.p`
  font-size: 10px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: ${(props) => props.theme.palette.secondary};
  width: ${(props) => props.width};
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  bottom: 25px;
  left: 65%;
  color:${(props=> props.theme.palette.secondary)};
`;
