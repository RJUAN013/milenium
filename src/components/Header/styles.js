import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 92px;
    background: #2c9432;
    justify-content: center;
    position: relative;
    display: flex;
`

export const LeftSide = styled.div`
    width: 560px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const LeftSideA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 70px;
        heigth: 70px;
    }
`
export const LeftSideB = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        width: 300px;
        height: 30px;
        border-radius: 10px;
        border: none;
    };

    img {
        width: 30px;
        heigth: 30px;
    };
`

export const RightSide = styled.div`
    width: 560px;
    height: 92px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
export const RightSideA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 30px;
        heigth: 30px;
    }
`
export const RightSideB = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 30px;
        heigth: 30px;
    }
`