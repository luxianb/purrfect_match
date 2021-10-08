import './MatchPage.css'
import { Typography } from 'antd';
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import ImageCard from "../components/ImageCard";
import { addCardToRandomPosition, removeCard, setCardInfo, toggleMatchFound } from '../redux/slice/imagesSlice';


export default function MatchPage() {
  const state = useSelector(state => state.cards)
  const {cardsInfo, matchFound} = state;
  const dispatch = useDispatch()
  const history = useHistory()

  async function getCatImages(limit) {
    const data = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {api_key: process.env.REACT_APP_CAT_API_KEY, limit: limit || 20}
    })
    // console.log("Image fetch", data.data)
    dispatch(setCardInfo(data.data))
  }
  
  useEffect(() => {
    getCatImages()
  }, [])

  useEffect(() => {
    if(matchFound) {
      toggleMatchFound()
      history.push('/landing')
    }
  }, [matchFound])


  console.log(cardsInfo)
  return(
    <>
      <Typography.Title>Match Page</Typography.Title>
      
      <div style={{position: 'relative'}}>
        {/* <CardStack source={cardsInfo} /> */}
        {cardsInfo?.map((card, index) => (<>
          {index < 3 && (
            <ImageCard 
              image={card.url} 
              index={index}
              key={card.url}
              onKeepClick={() => dispatch(addCardToRandomPosition())}
              onNopeClick={() => dispatch(removeCard())}
            />
            )}
        </>))}

      </div>

      <Typography.Text className="counterContainer">
        {cardsInfo.length} left
      </Typography.Text>

    </>
  )
}