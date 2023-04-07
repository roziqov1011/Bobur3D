import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* border: 2px solid yellow; */
    display: flex;
    align-items: center;
    justify-content: center ;
    margin-top:10px;
    
`

export const ScoreBox = styled.div`
    width: ${p=>p.width}px;
    height: ${p=>p.height}px;
    min-height: 100px;
    min-width: 100px;
    padding: 10px;
    /* border: 2px dotted yellow; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Button = styled.button`
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 37.8424px;
    line-height: 61px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    transform: scale(${p=>p.scale});
    justify-content: center;
    align-items: center ;
    right: -40px;
    top: -0px;
    border: none;
    outline: none;
    border-radius: 100%;
    transition: .3s linear;
    background: linear-gradient(300deg, #D64304 13.4%, #FE7A3A 86.6%);
    &:hover{
        background: linear-gradient(300deg, #D64304 50.4%, #FE7A3A 100.6%);
        cursor: pointer;
    }
`

export const NumberContainer = styled.div`
    position: absolute;
    width: 70%;
    height: 70%;
    border-radius: 100%;
    background-color: #453F3A; //#453F3A
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    font-size: ${p=>p.scale*37}px;
    line-height: 104px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`