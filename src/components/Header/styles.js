import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 92px;
    background: #008037;
    display: flex;
    justify-content: center;
    position: Sticky;
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

    input {
        width: 520px;
        height: 50px;
        border-radius: 35px;
        border: none;
        outline: none;
        padding-left: 30px;
        box-sizing: border-box;
        transition: .3s;
    }

    img {
        width: 10px;
        height: 10px;
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
    }

    h4{
        color: #FFF;
        padding-right: 5px;
    }
`