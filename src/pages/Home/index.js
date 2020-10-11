import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { images } from "./images";
import logo from "../../assets/images/logo.png";

import * as S from "./styled";
import TabBar from "../../components/TabBar";

const Actions = () => {
  return (
    <S.Actions>
      <VisibilityIcon />
      <ShareIcon />
      <FavoriteIcon />
    </S.Actions>
  );
};

function Home() {
  const calcWidth = (index) => {
    let pos = index % 6;

    if (pos < 1) {
      return "352px";
    } else if (pos > 3 && pos <= 6) {
      return " 170px";
    } else {
      return "110px";
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logo} />
        <S.Text>
          <span>Bem-vinda</span> a uma <span>nova</span> forma de fazer{" "}
          <span>turismo</span>
        </S.Text>
        <S.Content>
          {images.map((res, index) => (
            <div key={index}>
              <Actions />
              <S.Locations width={calcWidth(index)} src={res.url} alt="" />
            </div>
          ))}
        </S.Content>
      </S.Header>
      <TabBar />
    </S.Container>
  );
}

export default Home;
