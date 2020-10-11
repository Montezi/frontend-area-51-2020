import React, { useState } from "react";

import * as S from "./styles";
import Logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

function Signup() {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "123456",
    name: "",
    birthdate: null,
  });

  const handleSignUp = async () => {
    try {
      const result = await api.get("user", form);
      console.log("result", result.data);
      if (result.data) {
        alert("Cadastro realizado com Sucesso!");
        setTimeout(() => {
          history.push("/home");
        }, 3000);
      }
    } catch (error) {
      console.log("error", error);
      alert("Erro ao realizar o cadastro");
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ImageLogo src={Logo} />
        <S.Title>CADASTRAR</S.Title>
      </S.ContainerHeader>
      <S.FormContainer>
        <S.Form>
          <Input
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="E-mail"
            name="username"
            onChange={handleInputChange}
            value={form.username}
          />
          <S.Term>
            <S.Checkbox name="termo" />
            <S.Text left="6px">
              Aceito o <S.LinkTerm href="#">termo de utilização</S.LinkTerm>
            </S.Text>
          </S.Term>
          <S.Text left="20px">
            Uma senha de acesso será enviada para seu e-mail
          </S.Text>
          <Button onClick={() => handleSignUp()} name="CADASTRAR-SE" />
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
