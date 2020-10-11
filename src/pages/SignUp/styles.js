import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  max-width: 375px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Form = styled.form``;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 158px;
  height: 186px;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.palette.secondary};
  font-weight: bold;
  font-family: "Kohinoor";
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})``;

export const Term = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const Text = styled.span`
  font-size: 12px;
  font-family: "Kohinoor";
  margin-left: ${(props) => props.left};
  color: ${(props) => props.theme.palette.secondary};
`;

export const LinkTerm = styled.a`
  color: #e7501b;
  text-decoration: underline;
`;

export const LinkLogin = styled(Link)`
  font-size: 16px;
  font-family: "Kohinoor";
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.palette.secondary};
`;

export const TextQuestion = styled.span`
  font-size: 17px;
  font-family: "Kohinoor";
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.palette.secondary};
  margin-top: 20px;
`;
