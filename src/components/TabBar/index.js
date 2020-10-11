import React, { useState } from "react";

import Menu from "../Menu";

import MenuIcon from "@material-ui/icons/Menu";
import Notification from "@material-ui/icons/Notifications";
import Share from "@material-ui/icons/Share";
import Search from "@material-ui/icons/Search";

import location from "../../assets/images/location.svg";

import * as S from "./styled";

function TabBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <S.Container>
        <S.Content>
          <MenuIcon onClick={() => setShow(!show)} />
          <Notification />
          <Share />
          <Search />
        </S.Content>
        <S.Location src={location} alt="location" />
      </S.Container>
      <Menu show={show} setShow={setShow} />
    </>
  );
}

export default TabBar;
