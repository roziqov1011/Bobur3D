import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { AnimatedText } from '../style'
import CountUp from 'react-countup';
import { Button, Container, NumberContainer, ScoreBox } from './style'
import 'react-circular-progressbar/dist/styles.css';

const Score = ({height,width,scale,buttonText,score,size}) => {
    const [UseClick, setUseClick] = useState(0);
    return (
        <Container>
            <AnimatedText>/////////</AnimatedText>
            <ScoreBox 
                width={width}
                height={height}
            >
                <CircularProgressbar
                    value={UseClick}
                    strokeWidth={5}
                    className='scorebox'
                    text='21'
                    styles={buildStyles({
                        rotation: 0.5,
                        backgroundColor: 'red',
                        textSize: '16px',
                        pathTransitionDuration: 1,
                        pathColor: `#E1511F`,
                        textColor: 'white',
                        trailColor: '#3B3632',
                        backgroundColor: '#4c00ff',
                    })}
                />
                <NumberContainer scale={scale}>
                    <CountUp
                        startVal={0}
                        style={{fontFamily:'Bebas Neue',fontSize:size}}
                        duration={1}
                        end={UseClick}
                        separator=" "
                        decimals={2}
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                    />
                </NumberContainer>
                <Button scale={scale} onClick={()=>setUseClick(score)}>
                     <img style={{transform:scale === 1 ? 'scale(0.7)' : "scale(1)"}} src={buttonText} />
                </Button>
            </ScoreBox>
            <AnimatedText>/////////</AnimatedText>
        </Container>
    )
}

export default Score