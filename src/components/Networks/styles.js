import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 40px;
    background: #cac775;
    display: flex;
    justify-content: center;
`

export const LeftSide = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const CenterSide = styled.div`
    width: 720px;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img {
        width: 30px;
        height: 30px;
    }
`

export const RightSide = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #8ff7a2;

    :hover {
        background: #52f271;
    }

    a {
        color: #222;
        text-decoration: none;
        background-color: transparent;
      }
      
      a:hover {
        color: #000;
        text-decoration: none;
      }
`