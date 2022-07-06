import React from "react"
import * as S from "./styles"
import SimpleImageSlider from "react-simple-image-slider"
import banner_01 from "../../assets/banner_01.jpg"
//  import banner_02 from "../../assets/banner_02.jpg"

const images = [
    { url: {banner_01} },
    { url: "../../assets/banner_02.jpg" },
  ];
  

export default function BannerPrimary(){
    return(
        
        <S.Container>
            <S.Center>
                <SimpleImageSlider
                    width={1900}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </S.Center>
        </S.Container>
    )
}