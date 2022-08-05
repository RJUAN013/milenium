import React from "react"
import * as S from "./styles"
import free from "../../assets/free.gif"

export default function BannerSecondary(){

    return(
        <S.Container>
            <S.Center>
                <img src={free} alt="Frete"/>
            </S.Center>
        </S.Container>
    )
}