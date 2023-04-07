import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatedText, AnimeContainer, Break, Button, ButtonContainer, Container, ImgContainer, ImgHero, MainContainer, MiddleText, R30Text, Row1, SerContainer, SertifikatButton, Span, Span1, Wrapper } from './style'
import R30 from '../Info/R30/R30';
import { FirstName, ImageBack, ImageBack1, NameContainer, Surname } from '../Info/Detail/style';
import ImgA from '../../assets/icons/a.png';
import Back from '../../assets/icons/back.png';
import CountUp from 'react-countup';


const Sertifikat = () => {
    const location = useLocation();
    const { id, firstname, lastname, autocad, tridsmax, lumion, overall, image,sertificate } = location.state;
    const [IsClicked, setIsClicked] = useState('1');
    const [animation, setanimation] = useState('1');
    const [Letter, setLetter] = useState('X');
    const [state, setstate] = useState(0);
    const navigate = useNavigate();
    var intervalId;


    function makeid(length) {
        var result = '';
        var characters = 'ABC';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    function makeset() {
        setLetter(makeid(1))

    }
    const ClickSertificate = () => {
        setIsClicked('2')
        setanimation('2')
        console.log('IsClicked', IsClicked);
        console.log('animation', animation)
        if (intervalId) {
            clearInterval(intervalId);
        }
        if(!animation==='1'){
            intervalId = setInterval(makeset, 1001);

        }
        console.log('intervalId', intervalId)
    }




    setTimeout(() => {
        if (IsClicked === '2') {
            setLetter(sertificate);
            setanimation('1');
            setIsClicked('1')
            console.log('www');
            clearInterval(intervalId);
        }
    }, 2000);



    return (
        <>

            <R30 />
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
                    <MainContainer>
                        <SerContainer>
                            <NameContainer>
                                <Surname>{lastname}</Surname>
                                <FirstName>{firstname}</FirstName>
                            </NameContainer>
                            <AnimeContainer>
                                <AnimatedText>//////////////</AnimatedText>
                                <ButtonContainer>
                                    <SertifikatButton onClick={ClickSertificate}>SERTIFIKAT</SertifikatButton>
                                    <Button >
                                        {animation === '2' ? <Span rotatee={animation === '2'}>{Letter}</Span> : <Span1>{Letter}</Span1>}

                                    </Button>
                                </ButtonContainer>
                                <AnimatedText>//////////////</AnimatedText>
                            </AnimeContainer>
                        </SerContainer>
                        <ImgContainer>
                            <ImgHero src={image} />
                        </ImgContainer>
                    </MainContainer>
                </Wrapper>

            </Container>


            <ImageBack onClick={() => navigate('/')} src={Back} />
            <ImageBack1 onClick={() => navigate('/frontorti')} src={Back} />
        </>
    )
}

export default Sertifikat