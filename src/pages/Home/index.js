import React from "react"
import * as S from "./styles"

//components
import Header from "../../components/Header"
import EndHeaderRectractable from "../../components/EndHeaderRetractable"
import TopHeaderRectractable from "../../components/TopHeaderRetractable"
import BannerPrimary from "../../components/BannerPrimary"
import BannerSecondary from "../../components/BannerSecondary"
import Card from "../../components/Card"
import Network from "../../components/Networks"
import Catalogo from "../../components/catalog"

export default function Home() {
    return (
      <S.Container>
          <TopHeaderRectractable/>
          <Header/>
          <EndHeaderRectractable/>
          <BannerPrimary/>
          <BannerSecondary/>
          <Card/>
          <Catalogo/>
          <Network/>
      </S.Container>
    )
  }