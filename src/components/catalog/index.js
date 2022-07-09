import React from "react"
import * as S from "./styles"
import catalogo_01 from "../../assets/catalogo_01.png"

export default function Catalogo(){
    return(
        <S.Container>
            <h2>Catálogo</h2>
            <S.CenterSide>
                <S.CardA>
                
                    <img src={catalogo_01} alt="Catalogo_01"/>
                    <p>Estivas</p>
                </S.CardA>
                <S.CardB>   
                    <img src={catalogo_01} alt="Catalogo_01"/>
                </S.CardB>
                <S.CardC>   
                    <img src={catalogo_01} alt="Catalogo_01"/>
                </S.CardC>
                <S.CardD>   
                    <img src={catalogo_01} alt="Catalogo_01"/>
                   
                </S.CardD>
            </S.CenterSide>
        </S.Container>
    )
}