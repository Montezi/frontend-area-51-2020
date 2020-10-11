import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import api from "../../services/api";

import Logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";

function Login() {
  const history = useHistory();

  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const result = await api.post("auth", form);
      console.log("result", result.data.status);
      if (result.data.status === "ok") {
        history.push("/home");
      } else {
        alert("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.log("error", error);
      alert("Usuário ou senha incorretos");
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ImageLogo src={Logo} />
        <S.Title>ACESSAR</S.Title>
      </S.ContainerHeader>
      <S.FormContainer>
        <Input
          placeholder="E-mail"
          name="username"
          value={form.username}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Senha"
          name="password"
          value={form.password}
          type="password"
          onChange={handleInputChange}
        />
        <S.Term>
          <S.Remember>
            <S.Checkbox name="remember" />
            <S.Text left="6px">Lembre-me</S.Text>
          </S.Remember>
          <S.LinkForgot>Esqueceu sua senha?</S.LinkForgot>
        </S.Term>

        <Button name="ENTRAR" onClick={() => handleLogin()} />

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
