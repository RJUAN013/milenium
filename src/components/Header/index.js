import React from "react"
import * as S from "./styles"
import logo from "../../assets/logo.png"
import search from "../../assets/search.jpg"

export default function Header(){
    return(
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo"/>
                <img src={logo} alt="Logo"/>
                <input type="text" id="txtBusca" placeholder="Buscar..."/>
                <img src={search} id="btnBusca" alt="Buscar"/>
            </S.LeftSide>
            <S.RightSide>

            </S.RightSide>
        </S.Container>
    )
}