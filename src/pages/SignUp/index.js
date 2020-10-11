import React from "react";

import * as S from "./styles";
import Logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import { useHistory } from "react-router-dom";

function Signup() {

  const history = useHistory();

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ImageLogo src={Logo} />
        <S.Title>CADASTRAR</S.Title>
      </S.ContainerHeader>
      <S.FormContainer>
        <S.Form>
          <Input placeholder="Nome" name="name" />
          <Input placeholder="E-mail" name="email" />
          <S.Term>
            <S.Checkbox name="termo" />
            <S.Text left="6px">
              Aceito o <S.LinkTerm href="#">termo de utilização</S.LinkTerm>
            </S.Text>
          </S.Term>
          <S.Text left="20px">
            Uma senha de acesso será enviada para seu e-mail
          </S.Text>
          <Button onClick={()=> history.push("/home")} name="CADASTRAR-SE" />
        </S.Form>
        <S.ContainerButtons>
          <S.LinkLogin to="/Login">Já é cadastrado? Acesse aqui</S.LinkLogin>
          <ButtonIcon source={facebook} value="Cadastrar-se com o facebook" />
          <ButtonIcon source={google} value="Cadastrar-se com o gmail" />
          <S.TextQuestion>
            Está com dúvidas? <S.LinkTerm href="#">Saiba mais</S.LinkTerm>
          </S.TextQuestion>
        </S.ContainerButtons>
      </S.FormContainer>
    </S.Container>
  );
}

export default Signup;
