import './ImageCard.css'
import {Button, Space} from 'antd'
import {animated} from '@react-spring/web'

import { addCardToRandomPosition, removeCard } from '../redux/slice/imagesSlice';
import { useDispatch } from 'react-redux';

const CardButton = (props) => (
  <Button block shape="round" {...props} >
    {props.label}
  </Button>
)

export default function ImageCard(props) {
  const dispatch = useDispatch()
  return(
    <animated.div style={props.animStyle}>

    <div className="cardContainer" style={{
      ...props?.index > 0 ? {
        position: 'absolute',
        top: -props.index * 10,
        zIndex: 3 - props.index
      }: {position: 'relative', zIndex: 3}}}>

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
            onClick={() => dispatch(addCardToRandomPosition())} 
            label="Keep" 
          />
          <CardButton 
            className="nopeButton"
            onClick={() => dispatch(removeCard())} 
            label="Nope" 
          />
          </div>
      </Space>
    </div>
  </animated.div>
  )
}