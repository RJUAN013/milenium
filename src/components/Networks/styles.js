import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 400px;
    background: #999;
    display: flex;
    justify-content: center;
`

export const LeftSide = styled.div`
    width: 200px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const CenterSide = styled.div`
    width: 720px;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const RightSide = styled.div`
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`