import React from "react"
import * as S from "./styles"
import green_facebook from "../../assets/green_facebook.png"
import green_instagram from "../../assets/green_instagram.png"
import green_twitter from "../../assets/green_twitter.png"
import green_youtube from "../../assets/green_youtube.png"

export default function Network(){
    return(
        <S.Container>
            <S.LeftSide>
               
            </S.LeftSide>
            <S.CenterSide>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={green_facebook} alt="Facebook"/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={green_instagram} alt="Instagram"/></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={green_youtube} alt="Instagram"/></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><img src={green_twitter} alt="Instagram"/></a>
            </S.CenterSide>
            <S.RightSide>

            </S.RightSide>
        </S.Container>
    )
}