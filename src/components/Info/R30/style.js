import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  height: 100vh;
  background: linear-gradient(119.31deg, #1a1614 0.66%, #2e221b 99.48%);
  user-select: none;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled.svg`
  width: 600px;
  min-height: 400px;
  /* border: 2px solid red; */
  height: auto;
  padding-bottom: 0px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const Text = styled.text`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 453.433px;
  background: linear-gradient(
    180deg,
    #ffffff 11.52%,
    rgba(255, 255, 255, 0.5) 100.0%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  user-select: none;
  fill:#271F1B;
  /* stroke: #fff; */
  /* text-shadow:
      0 0 9px  rgb(108, 210, 19),
      0 0 9px  rgb(82, 131, 58),
      0 0 9px  rgb(19, 150, 210); */
     
  stroke-linejoin: round;
  stroke-dasharray: 50;
  stroke-opacity: 0.4;
  stroke-width: 3px;
  animation: animate 4s linear infinite;
`;
export const Text1 = styled.text`
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 453.433px;
    line-height: 664px;
    background: linear-gradient(180deg, #FFFFFF 11.52%, rgba(255, 255, 255, 1) 83.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: #FFFFFF;
    opacity: 0.1;
    /* fill: rgba(255,255,255,1); */
`;