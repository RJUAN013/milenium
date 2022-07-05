import React from "react"
import * as S from "./styles"
import card from "../../assets/card.jpg"

export default function Card(){
    return(
        <S.Container>
            <S.Center>
                <img src={card} alt="Cartão"/>
                <img src={card} alt="Cartão"/>
                <img src={card} alt="Cartão"/>
                <img src={card} alt="Cartão"/>
            </S.Center>
        </S.Container>
    )
}