import styled from "styled-components"

export const Container = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 72px;
        background: #004D21;
        display: flex;
        justify-content: center;
        position: sticky;
        border-bottom: 5px solid #cac775;
`

export const LeftSide = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h3 {
        color: #cac775;
    }
`

export const RightSide = styled.div`
    width: 870px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    h3 {
        color: #cac775;
    }
`

