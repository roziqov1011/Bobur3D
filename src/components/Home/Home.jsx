import React from 'react'
import { AnimatedText, Break, Container, FirstName, Img, ImgContainer, JustWrapper, MiddleText, NamesWrapper, R30Text, Row1, SurName, Wrapper } from './style'
import AllStudents from '../../assets/students/allstudents.png';
import AllStudents2 from '../../assets/boburaka/all1.png';
import {StudentsData} from  '../../data/students';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const ToDetail = (item) => {
    navigate(`/detail/${item.id}/`,{state:item})
  }

  return (
    <Container>
      <Row1>
        <AnimatedText>////////////////////</AnimatedText>
        <MiddleText>
          <R30Text>Y36 GURUH</R30Text>
        </MiddleText>
        <AnimatedText>////////////////////</AnimatedText>
      </Row1>
      <Wrapper>
        <ImgContainer>
          <Img src={AllStudents2} />
        </ImgContainer>
        <NamesWrapper>
          {
            StudentsData.map((item, i) => (
              <JustWrapper key={i} onClick={()=>ToDetail(item)}>
                <FirstName>{item.firstname}</FirstName>
                <SurName>{item.lastname}</SurName>
              </JustWrapper>
            ))
          }
        </NamesWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home