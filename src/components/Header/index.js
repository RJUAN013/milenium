import React from "react"
import * as S from "./styles"
import logo from "../../assets/logo.png"
import search from "../../assets/search.jpg"
import localization from "../../assets/localization.png"
import user from "../../assets/user.png"

export default function Header(){
    return(
        <S.Container>
            <S.LeftSide>
                <S.LeftSideA>
                    <img src={logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                </S.LeftSideA>
                <S.LeftSideB>
                    <input type="text" id="txtBusca" placeholder="Buscar..."/>
                    <img src={search} id="btnBusca" alt="Buscar"/>
                </S.LeftSideB>
            </S.LeftSide>
            <S.RightSide>
                <S.RightSideA>
                    <h3>Cidade Arcoverde</h3>
                    <img src={localization} alt="Localização"/>
                </S.RightSideA> 
                <S.RightSideB>         
                    <h4>Bem Vindo!</h4>
                    <img src={user} alt="Usuário"/> 
                </S.RightSideB>            
            </S.RightSide>
        </S.Container>
    )
}