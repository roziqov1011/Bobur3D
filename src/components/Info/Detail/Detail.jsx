import React from "react";
import Score from "./Score/Score";
import { AnimatedText, Break, Container, FirstName, HeroPicture, MiddleText, NameContainer, OverallContainer, OverallText, R30Text, Row1, SertifikatButton, Surname, ThreeandImgWrapper, ThreeandImgWrapper1, ThreeContainer, ThreeEveryBlock, ThreeTextme, ThreeTitle, Wrapper } from "./style";
import Fake from '../../../assets/students/fake.png';

import Tree from '../../../assets/icons/tree.png';
import All from '../../../assets/icons/all.png';
import ImgA from '../../../assets/icons/a.png';
import Img3 from '../../../assets/icons/3.png';
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {id,firstname,lastname,autocad,tridsmax,lumion,overall,image} = location.state;
    console.log(lumion);

    const ToSertificate = () => {
        navigate(`/sertificate/${id}`,{state:location.state})
    }

    return (
        <Container>
            <Row1>
                <AnimatedText>////////////////////</AnimatedText>
                <MiddleText>
                    3D DIZAYN
                    <R30Text>Y36 GURUH</R30Text>
                    <Break /> BITIRUV KECHASI
                </MiddleText>
                <AnimatedText>////////////////////</AnimatedText>
            </Row1>
            <Wrapper>
                <OverallContainer>
                    <NameContainer>
                        <Surname>{lastname}</Surname>
                        <FirstName>{firstname}</FirstName>
                    </NameContainer>
                    <Score
                        width={300}
                        size={55}
                        height={300}
                        scale={1} 
                        buttonText={All}
                        score={tridsmax+lumion+autocad}  
                    />
                    <OverallText>
                        <SertifikatButton onClick={ToSertificate}>SERTIFIKAT</SertifikatButton>
                    </OverallText>
                </OverallContainer>
                <ThreeContainer>
                    <ThreeandImgWrapper>
                        <ThreeEveryBlock>
                            <Score
                                width={150}
                                size={35}
                                height={150}
                                scale={0.7}
                                buttonText={ImgA}  
                                score={autocad}  

                            />
                            <ThreeTitle>AutoCad</ThreeTitle>
                            
                        </ThreeEveryBlock>
                        <ThreeEveryBlock>
                            <Score
                                width={150}
                                size={35}
                                height={150}
                                scale={0.7}
                                buttonText={Img3}
                                score={tridsmax}  


                            />
                            <ThreeTitle>3Ds Max</ThreeTitle>
                            
                        </ThreeEveryBlock>
                        <ThreeEveryBlock>
                            <Score
                                width={150}
                                size={35}
                                height={150}
                                scale={0.7}
                                buttonText={Img3}
                                score={lumion}  


                            />
                            <ThreeTitle>Lumion</ThreeTitle>
                            
                        </ThreeEveryBlock>
                    </ThreeandImgWrapper>
                   <ThreeandImgWrapper1>
                     <HeroPicture src={image} alt="" />
                   </ThreeandImgWrapper1>
                </ThreeContainer>
            </Wrapper>
        </Container>
    );
};

export default Detail;
