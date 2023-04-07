import styled, { keyframes } from "styled-components";

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
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #FDF7F8;
`

export const AnimatedText = styled.p`
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
  background: linear-gradient(310deg,#333 10%, aqua 50%, #333 80%);
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
  font-size: 56px;
  line-height: 68px;
  text-align: center;

  color: #D64304;
`

export const Break = styled.br``

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  max-width: 1500px;
`
export const ImgContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: auto;
`

export const Img = styled.img`
  width: 75%;
  margin-bottom: 30px;

`

export const NamesWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`
export const FirstName = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  transition: .3s;
  color: #3C3633;
`


export const SurName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  transition: .3s;
  color: #ABABAB;
  margin-top: 3.5px;
`
export const JustWrapper = styled.div`
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .3s;
  &:active{
    cursor: pointer;
    ${SurName},${FirstName}{
      background: -webkit-linear-gradient(orange, red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

