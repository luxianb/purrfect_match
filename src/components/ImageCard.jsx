/* eslint-disable react-hooks/exhaustive-deps */
import './ImageCard.css'
import {Button, Space} from 'antd'
import {animated, useSpring, to} from '@react-spring/web'

import { addCardToRandomPosition, removeCard } from '../redux/slice/imagesSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';

const CardButton = (props) => (
  <Button block shape="round" {...props} >
    {props.label}
  </Button>
)

export default function ImageCard(props) {
  const [animate, setAnimate] = useState('none')
  const [animStyle, api] = useSpring(() => ({x: 0, y:0, transform: `rotate(${0}deg) translateX(${0}px)`, opacity: 1, touchAction: 'none'}))
  const dispatch = useDispatch()


  // Start swipping animation based on state toggle, then update the card strore state at the end of the animation
  useEffect(() => {
    if (animate === 'left') {
      api.start({
        x: -400,
        transform: to([animStyle.x], (x) => `rotate(${x * 0.1}deg) translateX(${x}px)`),
        opacity: 0,
        onRest: () => dispatch(addCardToRandomPosition())
      })
    }
    if (animate === 'right') {
      api.start({
        x: 400,
        transform: to([animStyle.x], (x) => `rotate(${x * 0.1}deg) translateX(${x}px)`),
        opacity: 0,
        onRest: () => dispatch(removeCard())
      })
    }
  }, [animate])

  const bind = useDrag(({down, movement: [mx], swipe: [swipeX]}) => {
    api.start({
      x: down ? mx : 0,
      transform: down ? `rotate(${mx * 0.1}deg) translateX(${mx}px)` : `rotate(0deg) translateX(0px)`,
      immediate: down
    }, { axis: 'x' })
    if(mx < -200 || swipeX < 0) { 
      api.start({x: mx})
      setAnimate('left')
    }
    if(mx > 200 || swipeX > 0) { 
      api.start({x: mx})
      setAnimate('right')
    }
  })



  return(
    <animated.div {...bind()} style={{...props?.index > 0 ? {
      position: 'absolute',
      top: -props.index * 10,
      zIndex: 3 - props.index
    }: {position: 'relative', zIndex: 3},...animStyle}}
    >

    <div className="cardContainer">

      <Space direction="vertical">
        <div 
          className="cardImage" 
          style={{backgroundImage: 
          `url(${props.image})`}} 
          alt={props.caption}
        />
        <div className="row">
          <CardButton 
            className="keepButton" 
            onClick={() => setAnimate('left')} 
            // onClick={() => dispatch(addCardToRandomPosition())} 
            label="Keep" 
          />
          <CardButton 
            className="nopeButton"
            onClick={() => setAnimate('right')} 
            // onClick={() => dispatch(removeCard())} 
            label="Nope" 
          />
          </div>
      </Space>
    </div>
  </animated.div>
  )
}