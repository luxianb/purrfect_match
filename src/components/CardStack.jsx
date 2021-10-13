import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import ImageCard from "../components/ImageCard";
import Spinner from './Spinner';

const StackContainer = styled.div`
  position: relative;
  width: ${p => p.isMobile ? '100%' : 'initial'};
  display: ${p => p.isMobile ? 'flex' : 'block'};
  flex: 1;
  justify-content: center;
  margin: 0 auto;
`

export default function CardStack(props) {
  const {cards, display} = useSelector(state => state)
  const [cardHeight, setCardHeight] = useState(500)
  const { cardsInfo } = cards;
  const isMobile = display.deviceType === "mobile";
  const containerRef = useRef(0)

  useEffect(() => {
    if (containerRef.current.clientHeight !== null ) {
      // setCardHeight(containerRef.current.clientHeight - 20) // Add allowance for overflow
      setCardHeight(containerRef.current.clientHeight)
    }
    console.log(containerRef.current.clientHeight)
  }, [containerRef.current.clientHeight])


  return (
    <StackContainer isMobile={isMobile} ref={containerRef}>
    {cardsInfo?.length < 1 ?
      <div><Spinner /></div>
      : cardsInfo && cardsInfo?.map((card, index) => (<>
      {index < 3 && (
        <ImageCard 
          image={card.url} 
          index={index}
          key={card.url}
          height={isMobile ? cardHeight : null}
        />
        )}
    </>))}

    </StackContainer>
  )
}