import React from "react"
import * as S from "./styles"
import banner from "../../assets/banner.jpg"

export default function BannerPrimary(){
    return(
        <S.Container>
            <S.Center>
                <img src={banner} alt="Banner"/>
            </S.Center>
        </S.Container>
    )
}