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
                    <a href="../../pages/Home"><img src={logo} alt="Logo"/></a>
                </S.LeftSideA>
                <S.LeftSideB>
                        <input type="text" id="txtBusca" placeholder="Busque o produto que deseja" />
                        <img src={search} id="btnBusca" alt="Buscar"/>
                </S.LeftSideB>
            </S.LeftSide>
            <S.RightSide>
                <S.RightSideA>
                    <a href="https://www.google.com/maps/search/?api=1&query=Rua Armando de Siqueira Brito 402 São Miguel, Arcoverde-PE" target="_blank" rel="noopener noreferrer">Arcoverde-PE <br/> Bairro, São Miguel</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Rua Armando de Siqueira Brito 402 São Miguel, Arcoverde-PE" target="_blank" rel="noopener noreferrer"><img src={localization} alt="Localização"/></a>
                </S.RightSideA> 
                <S.RightSideB>         
                    <h4>Bem Vindo!</h4>
                    <img src={user} alt="Usuário"/> 
                </S.RightSideB>            
            </S.RightSide>
        </S.Container>
    )
}