import React from "react"
import * as S from "./styles"
import SimpleImageSlider from "react-simple-image-slider"
import banner_01 from "../../assets/banner_01.jpg"
import banner_02 from "../../assets/banner_02.jpg"

const images = [
    require({banner_01}),
    require({banner_02}),
];

export default function BannerPrimary(){
    return(
        
        <S.Container>
            <S.Center>
                
            <SimpleImageSlider
            width='100%'
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
            />
                
            </S.Center>
        </S.Container>
    )
}