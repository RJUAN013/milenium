import styled from "styled-components"

export const Container = styled.div`
    nav {
        width: 100%;
        height: 92px;
        background: #008037;
        display: flex;
        justify-content: center;
        
    }    
`

export const LeftSide = styled.div`
    width: 820px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const LeftSideA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 150px;
        height: 60px;
    }
`
export const LeftSideB = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;

    input {
        width: 520px;
        height: 50px;
        border-radius: 35px;
        border: none;
        outline: 0;
        padding-left: 30px;
        box-sizing: border-box;
        transition: .3s;
        background-color: none;
    }

    img {
        margin-top: 5px;
        margin-right: 20px;
        width: 20px;
        height: 20px;
    }
`

export const RightSide = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const RightSideA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
        color: #FFF;
        text-decoration: none;
        background-color: transparent;
      }
      
      a:hover {
        color: #000;
        text-decoration: none;
      }

    img {
        width: 45px;
        height: 45px;
    }

`
export const RightSideB = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
        -webkit-filter:grayscale(100%);
    }

    img:hover{
        -webkit-filter:grayscale(0%);
        transition: 1s;
    }

    h4{
        color: #FFF;
        padding-right: 5px;
    }
`