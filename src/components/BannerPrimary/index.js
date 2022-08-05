import React from "react"
import * as S from "./styles"
import SimpleImageSlider from "react-simple-image-slider"
import banner_01 from "../../assets/banner_01.jpg"
import banner_02 from "../../assets/banner_02.jpg"
import logo from "../../assets/logo.png"
import teste from "../../assets/teste.png"

export const img = [ logo, banner_01, banner_02, teste ];

export default function BannerPrimary(){
    return(
        
        <S.Container>
            <S.Center>
                <SimpleImageSlider
                width='100%'
                height={425}
                images={img}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={5.0}
                paralax={true}
                />
            </S.Center>
        </S.Container>
    )
}