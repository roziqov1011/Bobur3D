import React from 'react'
import { AnimatedText, Box, Container, FirstName, Img, MiddleText, NamesWrapper, R30Text, Row1, SurName, Wrapper } from './style'

import Otabek from '../../assets/dc/Otabek.png';
import Komron from '../../assets/dc/Komron.png';
import Abdulloh from '../../assets/dc/Abdulloh.png';
import Dostonbek from '../../assets/dc/Dostonbek.png';
import VFX from '../../assets/dc/VFX.png';
import { ImageBack } from '../Info/Detail/style';
import Back from '../../assets/icons/back.png';
import { useNavigate } from 'react-router-dom';

const FrontOrti = () => {
  const navigate = useNavigate();

  return (
    <>
    <Container>
      <Row1>
        <AnimatedText>////////////////////</AnimatedText>
        <MiddleText>
          <R30Text>PROJECT MEMBERS</R30Text>
        </MiddleText>
        <AnimatedText>////////////////////</AnimatedText>
      </Row1>
      <Wrapper>

        <Box>
          <Img src={Otabek} />
          <NamesWrapper>
            <FirstName>Otabek</FirstName>
            <SurName>Graphic Designer</SurName>
          </NamesWrapper>
        </Box>
        <Box>
          <Img src={Komron} />
          <NamesWrapper>
            <FirstName>Komron</FirstName>
            <SurName>UX-UI Designer</SurName>
          </NamesWrapper>
        </Box>
        <Box>
          <Img src={Abdulloh} />
          <NamesWrapper>
            <FirstName>Abdulloh</FirstName>
            <SurName>3D Designer</SurName>
          </NamesWrapper>
        </Box>
        <Box>
          <Img src={Dostonbek} />
          <NamesWrapper>
            <FirstName>Dostonbek</FirstName>
            <SurName>Web Developer</SurName>
          </NamesWrapper>
        </Box>
        <Box>
          <Img src={VFX} />
          <NamesWrapper>
            <FirstName>Shoximardon</FirstName>
            <SurName>Videographer VFX</SurName>
          </NamesWrapper>
        </Box>

      </Wrapper>
    </Container>

    
            <ImageBack onClick={() => navigate('/')} src={Back} />

    </>
  )
}

export default FrontOrti