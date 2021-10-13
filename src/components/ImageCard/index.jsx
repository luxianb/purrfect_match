/* eslint-disable react-hooks/exhaustive-deps */
import './ImageCard.css'
import {useSpring, to} from '@react-spring/web'
import { useDispatch,  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { addCardToRandomPosition, removeCard } from '../redux/slice/imagesSlice';
import { ContainerDiv, CardContainer, ExpandButton, ButtonContainer, CardButton } from './components';

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
        
        <ButtonContainer>
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
          </ButtonContainer>
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