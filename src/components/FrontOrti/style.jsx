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
  width: 100%;
  height: auto;
  min-height: 70vh;
  max-width: 1500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`

export const Box = styled.div`
    width: 280px;
    height: 420px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

`
export const Img = styled.img`
    

`

export const NamesWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-direction: column;
`
export const FirstName = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
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
