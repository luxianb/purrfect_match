/* eslint-disable react-hooks/exhaustive-deps */
import './MatchPage.css'
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router';
import {clearCards,setCardInfo, toggleMatchFound } from '../../redux/slice/imagesSlice';
import CardStack from '../../components/CardStack';
import Header from '../../components/Header'
// import FactDisplay from '../components/InfoDisplays/FactDisplay';
import BreedInfoDisplay from '../../components/InfoDisplays/BreedInfoDisplay';
import { PageContainer, ContentContainer, CountContainer } from './components';

export default function MatchPage() {
  const params = useParams()
  const {cards: {cardsInfo, matchFound}, display} = useSelector(state => state)
  const isMobile = display.deviceType === "mobile";
  const dispatch = useDispatch()
  const history = useHistory()

  async function getCatImages(breed) {
    const data = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {api_key: process.env.REACT_APP_CAT_API_KEY, limit: 20, breed_id: breed || ''}
    })
    dispatch(setCardInfo(data.data))
  }  

  async function getDogImages(breed) {
    const data = await axios.get('https://api.thedogapi.com/v1/images/search', {
      params: {api_key: process.env.REACT_APP_DOG_API_KEY, limit: 20, breed_id: breed || ''}
    })
    dispatch(setCardInfo(data.data))
  }
  
  useEffect(() => {
    if(params.type === 'findMeADog') {
      getDogImages(params.breed || '')
    } else {
      getCatImages(params.breed || '') 
    }
    return () => { dispatch(clearCards()) }
  }, [params])
  
  useEffect(() => {
    if(matchFound) {
      dispatch(toggleMatchFound());
      history.push(`/found/${params.type}/${cardsInfo[0].id}${params.breed ? `/${params.breed}` : ''}`)
    }
  }, [cardsInfo.length === 1])
  

  return(
    <PageContainer>
      <Header />

      <ContentContainer isMobile={isMobile}>

        <div style={{gridArea: 'cards', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <CardStack/>
          <p style={{marginTop: '8px'}}>
            <i class="fas fa-arrow-left" />
            {` swipe left to keep the ${params.type === "findMeACat" ? "cat" : "dog"} or swipe right to remove`}
            <i class="fas fa-arrow-right" />
          </p>
          <CountContainer>
            <h2 style={{margin: 0}}>{cardsInfo.length} left</h2>
          </CountContainer>
        </div>

        {!isMobile && (
          <div style={{gridArea: "right"}}>
            {params.breed && (
              <BreedInfoDisplay />
            )}
            {/* {params.type === 'findMeACat' && (
              <FactDisplay />
            )} */}
          </div>
        )}

      </ContentContainer>

    </PageContainer>
  )
}
