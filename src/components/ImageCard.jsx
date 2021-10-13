/* eslint-disable react-hooks/exhaustive-deps */
import './ImageCard.css'
import {Button} from 'antd'
import styled from 'styled-components'
import {animated, useSpring, to} from '@react-spring/web'

import { addCardToRandomPosition, removeCard } from '../redux/slice/imagesSlice';
import { useDispatch,  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';

const ContainerDiv = styled(animated.div)`
  position: ${p => p.index > 0 ? 'absolute' : 'relative'};
  z-index: ${p => p.index > 0 ? 3 - p.index : 3};
  top: ${p => p.index > 0 ? `${-p.index * 10}px` : 0};
  width: 100%;
  `

const CardContainer = styled.div`
  position: relative;
  padding: 18px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 23, 68, 0.2);
  display: flex;
  flex-direction: column;
  height: ${p => `${p.height}px`};
  width: ${p => p.deviceType === "mobile" ? `100%` :`${Math.floor(p.height / 16 * 9)}px`};
  background-image: ${p => `url(${p.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`

const CardButton = (props) => (
  <Button block shape="round" size="large" {...props} >
    {props.label}
  </Button>
)

const ExpandContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255, 0.2);
`

const ExpandButton = (props) => (
  <ExpandContainer onClick={props.onClick}>
    <i class="fas fa-expand" style={{margin: 0}}/>
  </ExpandContainer>
)

export default function ImageCard(props) {
  const [animate, setAnimate] = useState('none')
  const [animStyle, api] = useSpring(() => ({x: 0, y:0, transform: `rotate(${0}deg) translateX(${0}px)`, opacity: 1, touchAction: 'none'}))
  const dispatch = useDispatch()


  // Start swipping animation based on state toggle, then update the card strore state after the animation has run
  useEffect(() => {
    if (animate === 'left') {
      api.start({
        x: -300,
        transform: to([animStyle.x], (x) => `rotate(${x * 0.1}deg) translateX(${x}px)`),
        opacity: 0,
      })
      setTimeout(() => {
        dispatch(addCardToRandomPosition())
      }, 150)
    }
    if (animate === 'right') {
      api.start({
        x: 300,
        transform: to([animStyle.x], (x) => `rotate(${x * 0.1}deg) translateX(${x}px)`),
        opacity: 0,
      })
      setTimeout(() => {
        dispatch(removeCard())
      }, 150)
    }
  }, [animate])

  // Dragging animation hook
  const bind = useDrag(({down, movement: [mx], swipe: [swipeX]}) => {
    api.start({
      x: down ? mx : 0,
      transform: down ? `rotate(${mx * 0.1}deg) translateX(${mx}px)` : `rotate(0deg) translateX(0px)`,
      immediate: down
    }, { axis: 'x' })
    // If card moves pass threshold, then start animation to end and toggle function
    if(mx < -200 || swipeX < 0) { 
      api.start({
        x: mx,
        transform: `rotate(${mx * 0.1}deg) translateX(${mx}px)`,
      })
      setAnimate('left')
    }
    if(mx > 200 || swipeX > 0) { 
      api.start({
        x: mx,
        transform: `rotate(${mx * 0.1}deg) translateX(${mx}px)`,
      })
      setAnimate('right')
    }
  })



  return(
    <ContainerDiv {...bind()} style={{...animStyle}} index={props.index}>
      <CardContainer image={props.image} height={props.height || 500} deviceType={useSelector((state) => state.display.deviceType)}>
      
        <ExpandButton />
        

        <div className="buttonRow">
          <CardButton 
            className="keepButton" 
            onClick={() => setAnimate('left')} 
            label="Keep" 
          />
          <CardButton 
            className="nopeButton"
            onClick={() => setAnimate('right')} 
            label="Nope" 
          />
          </div>
    </CardContainer>
  </ContainerDiv>
  )
}

export function PresentationCard(props) {
  return(
    <CardContainer
      image={props.image}
      height={props.height || 500}
      deviceType={useSelector((state) => state.display.deviceType)}
    />
  )
}