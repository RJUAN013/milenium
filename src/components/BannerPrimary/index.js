import React from "react"
import * as S from "./styles"
import SimpleImageSlider from "react-simple-image-slider"
//import banner_01 from "../../assets/banner_01.jpg"
//import banner_02 from "../../assets/banner_02.jpg"

const img = [
    require("../../assets/logo.png"/*{banner_02}*/),
    require("../../assets/banner_01.jpg"/*{banner_01}*/),
    require("../../assets/banner_02.jpg"/*{banner_02}*/),
];

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
                />
            </S.Center>
        </S.Container>
    )
}