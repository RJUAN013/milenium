import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 72px;
    background: #0f5b13;
    display: flex;
    justify-content: center;
    overflowY: scroll;
    float: bottom;
    position: relative;
    border-bottom: 5px solid #9fcd9e;
`

export const LeftSide = styled.div`
    width: 250px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const RightSide = styled.div`
    width: 870px;
    height: 72px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`