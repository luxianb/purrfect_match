import './MatchPage.css'
import { Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router';
import ImageCard from "../components/ImageCard";
import { addCardToRandomPosition, clearCards, removeCard, setCardInfo, toggleMatchFound } from '../redux/slice/imagesSlice';
// import DogAutoComplete from '../components/DogAutoComplete';


export default function MatchPage() {
  const params = useParams()
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

  async function getDogImages(limit, breed) {
    let url;
    if (breed) {
      url = `https://dog.ceo/api/breed/${breed}/images/random/${limit || 20}`
    } else {
      url = `https://dog.ceo/api/breeds/image/random/${limit || 20}`
    }
    const data = await axios.get(url)
    const formatedData = data.data.message.map((item) => ({ url: item }))
    // console.log("Image fetch", formatedData)
    dispatch(setCardInfo(formatedData))
  }

  // async function getDogImages(limit) {
  //   const data = await axios.get(`https://dog.ceo/api/breeds/image/random/${limit || 20}`)
  //   const formatedData = data.data.message.map((item) => ({ url: item }))
  //   // console.log("Image fetch", formatedData)
  //   dispatch(setCardInfo(formatedData))
  // }


  
  useEffect(() => {
    if(params.breed === 'findMeADog') {
      getDogImages()
    } else {
      getCatImages() 
    }
    return () => { dispatch(clearCards()) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(matchFound) {
      toggleMatchFound()
      history.push('/landing')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchFound])


  return(
    <>
      <Typography.Title>Match Page</Typography.Title>

      
      <div style={{position: 'relative'}}>
        {cardsInfo.length < 1 ?
          <LoadingOutlined spin style={{fontSize: '60px', color: '#FF5252', margin: '18px' }}/>
         : cardsInfo?.map((card, index) => (<>
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
            {/* <DogAutoComplete /> */}

    </>
  )
}
