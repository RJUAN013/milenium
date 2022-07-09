import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: #cac775;
    display: flex;
    justify-content: center;
`

export const LeftSide = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const CenterSide = styled.div`
    width: 720px;
    height: 50px;
    padding: 3px;
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

    button {
        width: 200px;
        height: 50px;
        color: #222;
        background: #8ff7a2;
        border: none;
        cursor: pointer;
    }

    button:hover {
        width: 200px;
        height: 50px;
        color: #000;
        background: #52f271;
    }

    a {
       
        text-decoration: none;
    }
      
    a:hover {
        color: #000;
        text-decoration: none;
    }
`