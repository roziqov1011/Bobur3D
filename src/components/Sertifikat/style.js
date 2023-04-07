import styled, { keyframes } from "styled-components";

const animate = keyframes`
    to {
      transform: rotateY(360deg)  rotateZ(180deg) rotateX(360deg);
    }
`
const textclip = keyframes`
    to {
		background-position: 200% center;
	}
`

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AnimatedText = styled.p`
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
  background: linear-gradient(310deg,#58707b 10%, #ffffff 50%, #58707b 80%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 1.5s linear infinite;
  display: inline-block;
  opacity: 0.5;
  font-style: italic;
  padding: 0 20px;
  
`

export const Row1 = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`

export const MiddleText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 31.8881px;
  line-height: 39px;
  color: #FFFFFF;
  text-align: center;
`
export const R30Text = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 31.8881px;
  line-height: 39px;
  text-align: right;
  color: #D64304;
  margin-left: 10px;
`

export const Break = styled.br``

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  max-width: 1500px;
  margin: auto;
  margin-top: 20px;
  @media (max-width:1411px){
    flex-direction: column;
    margin-top: 20px;
  }
`


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 65vh;
    display: flex;

    justify-content: center;
    margin-top: 30px;
`

export const SerContainer = styled.div`
    width: 60%;
    padding-top: 50px;
`
export const ImgContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  
`

export const AnimeContainer = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const SertifikatButton = styled.button`
  width: 259px;
  height: 69px;
  background: linear-gradient(180deg, #FE7A3A 0%, #D64304 100%);
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 67px;
  text-align: center;
  color: #FFFFFF;
  border: none;
  transition: .3s;
  &:hover{
    cursor: pointer;
  }
  &:active{
    background: linear-gradient(100deg, #FE7A3F 0%, #D64310 100%);
  }
`


export const ButtonContainer = styled.div`
    position: relative;
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
    justify-content: center;
    align-items: center ;
    right: -70px;
    top: -50px;
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

export const Span = styled.span`
    animation: ${p=>p.rotatee ? animate : ''} 1s infinite;
`
export const Span1 = styled.span`
   
`

export const ImgHero = styled.img`
    width: 70%;
    max-width: 380px;
    transform: scale(1);
`

