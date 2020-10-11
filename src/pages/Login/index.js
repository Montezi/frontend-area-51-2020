import React from "react";

import * as S from "./styles";
import Logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";

function Login() {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ImageLogo src={Logo} />
        <S.Title>ACESSAR</S.Title>
      </S.ContainerHeader>
      <S.FormContainer>
        <S.Form>
          <Input placeholder="E-mail" name="email" />
          <Input placeholder="Senha" name="password" type="password" />
          <S.Term>
            <S.Remember>
              <S.Checkbox name="remember" />
              <S.Text left="6px">Lembre-me</S.Text>
            </S.Remember>
            <S.LinkForgot>Esqueceu sua senha?</S.LinkForgot>
          </S.Term>

          <Button name="ENTRAR" />
        </S.Form>
        <S.ContainerButtons>
          <ButtonIcon source={facebook} value="Entrar com o facebook" />
          <ButtonIcon source={google} value="Entrar com o gmail" />
          <S.TextQuestion>
            Novo por aqui? <S.LinkTerm to="/SignUp">Cadastre-se</S.LinkTerm>
          </S.TextQuestion>
        </S.ContainerButtons>
      </S.FormContainer>
    </S.Container>
  );
}

export default Login;
