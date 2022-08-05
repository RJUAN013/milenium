import React from "react"
import * as S from "./styles"

//assets
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import localization from "../../assets/localization.png"
import user from "../../assets/user.png"
import localization_black from "../../assets/localization_black.png"


export default function Header(){
    function localizationBlack(e) {
        e.currentTarget.src = localization_black;
    }
    function localizationColor(e) {
        e.currentTarget.src = localization;
    }

    return(
        <S.Container>
            <nav>
                <S.LeftSide>
                    <S.LeftSideA>
                        <a href="../../pages/Home"><img src={logo} alt="Logo"/></a>
                    </S.LeftSideA>
                    <S.LeftSideB>
                            <input type="text" placeholder="Busque o produto que deseja" />
                            <a href="../../pages/Home"><img src={search} alt="Buscar"/></a>                  
                    </S.LeftSideB>
                </S.LeftSide>
                <S.RightSide>
                    <S.RightSideA>
                        <a href="https://www.google.com/maps/search/?api=1&query=Rua Armando de Siqueira Brito 402 São Miguel, Arcoverde-PE" target="_blank" rel="noopener noreferrer">Arcoverde-PE <br/> Bairro, São Miguel</a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Rua Armando de Siqueira Brito 402 São Miguel, Arcoverde-PE" target="_blank" rel="noopener noreferrer">
                            <img src={localization} alt="Localização" onMouseOver={localizationBlack} onMouseOut={localizationColor}/>
                        </a>
                    </S.RightSideA> 
                    <S.RightSideB>         
                        <h4>Bem Vindo!</h4>
                        <img src={user} alt="Usuário"/> 
                    </S.RightSideB>            
                </S.RightSide>
            </nav>
        </S.Container>
    )
}