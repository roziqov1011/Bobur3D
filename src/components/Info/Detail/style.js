import styled, { keyframes } from "styled-components";

const animate = keyframes`
    to {
      transform: rotateY(360deg);
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
  max-width: 1700px;
  margin: auto;
  margin-top: 20px;
  @media (max-width:1411px){
    flex-direction: column;
    margin-top: 20px;
  }
`

export const OverallContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width:1411px){
    width: 100%;
  }
`

export const ThreeContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width:1411px){
    width: 100%;
  }
  @media (max-width:888px){
    flex-direction: column;
  }

`

export const ThreeandImgWrapper = styled.div`
    width: 50%;
    @media (max-width:888px){
      width: 100%;
    }
`
export const ThreeandImgWrapper1 = styled.div`
    width: 50%;
    height: 100%;
    min-height: 500px;
    @media (max-width:888px){
      width: 100%;
    }
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`


export const Surname = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.7;
`
export const FirstName = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 66px;
  text-align: center;
  color: #FFFFFF;
`

export const OverallText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 37px;
  text-align: center;
  margin-top: 15px;
  color: #FFFFFF;
`

export const ThreeEveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ThreeTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-top: -10px;
  line-height: 39px;
  text-align: center;
  color: #FFFFFF;

`

export const ThreeTextme = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
`

export const HeroPicture = styled.img`
  transform: scale(1);
    width: 82%;
    height: 100%;
  @media (max-width:888px){
    width: 80%;
  }
  @media (max-width:588px){
    width: 100%;
  }
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


export const ImageBack  = styled.img`
  position: absolute;
  bottom: 60px;
  cursor: pointer;
  z-index: 9999;
  left: 60px;
  :hover{
    cursor: pointer;
  }
`
export const ImageBack1  = styled.img`
  position: absolute;
  bottom: 60px;
  cursor: pointer;
  z-index: 9999;
  left: 200px;
  transform: rotate(180deg);
  :hover{
    cursor: pointer;
  }
`