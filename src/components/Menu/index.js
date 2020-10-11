import React from "react";
import { useHistory } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShareIcon from "@material-ui/icons/Share";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import logo from "../../assets/images/logo.png";

import * as S from "./styled";

function Menu({ show, setShow }) {
  const history = useHistory();
  return (
    <S.Container show={show}>
      <S.Content>
        <S.Profile src="https://images4.alphacoders.com/100/thumb-1920-1002134.png" />
        <S.Title>Gaby Carris</S.Title>
        <S.HighlightedText>Turista Iniciante</S.HighlightedText>
        <S.Options>
          <S.Item>
            <PersonIcon />
            <p>Minha conta</p>
          </S.Item>
          <S.Item>
            <FavoriteIcon />
            <p>Lugares salvos</p>
          </S.Item>
          <S.Item>
            <LocationOnIcon />
            <p>Indicar ponto turístico</p>
          </S.Item>
          <S.Item>
            <ShareIcon />
            <p>Minhas indicações</p>
          </S.Item>
          <S.Item>
            <NotificationImportantIcon />
            <p>Informações</p>
          </S.Item>
          <S.Item onClick={() => history.push("/Login")}>
            <KeyboardReturnIcon />
            <p>Sair</p>
          </S.Item>
        </S.Options>
        <S.Logo src={logo} />
        <S.SubTitle width="170px">
          Projeto desenvolvido durante o HackingRio2020
        </S.SubTitle>
        <S.CloseIcon style={{ fontSize: 33 }} onClick={() => setShow(!show)} />
      </S.Content>
    </S.Container>
  );
}

export default Menu;
