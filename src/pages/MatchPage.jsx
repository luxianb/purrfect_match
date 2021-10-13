import './MatchPage.css'
import axios from 'axios';
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router';
import {clearCards,setCardInfo, toggleMatchFound } from '../redux/slice/imagesSlice';
// import NavigationBar from '../components/NavigationBar';
import styled from 'styled-components';
import CardStack from '../components/CardStack';
import Header from '../components/Header'
import FactDisplay from '../components/FactDisplay';
// import DogAutoComplete from '../components/DogAutoComplete';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

const ContentContainer = styled.main`
  padding: 18px 12px;
  align-items: ${p => p.isMobile ? 'center' : 'start'};;
  display: ${p => p.isMobile ? 'flex' : 'grid'};
  flex-direction: column;
  flex: 1; 
  justify-items: center;
  grid-template-columns: ${p => !p.isMobile ? '.5fr 1fr .5fr' : ''};
  grid-template-areas: ${p => !p.isMobile ? '"left cards right"' : '""'};
`
const CountContainer = styled.div`
  background-color: rgba(38, 50, 56, 0.1);
  padding: 6px 18px;
  border-radius: 6px;
  font-size: 0.8rem;
  margin-top: 6px;
`

export default function MatchPage() {
  const contentRef = useRef()
  const params = useParams()
  const state = useSelector(state => state)
  const { cardsInfo, matchFound } = state.cards;
  const isMobile = state.display.deviceType === "mobile";
  const dispatch = useDispatch()
  const history = useHistory()

  async function getCatImages(limit, breed) {
    const data = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {api_key: process.env.REACT_APP_CAT_API_KEY, limit: limit || 20, breed_id: breed || ''}
    })
    // console.log("Image fetch", data.data)
    dispatch(setCardInfo(data.data))
  }  

  async function getDogImages(limit, breed) {
    const data = await axios.get('https://api.thedogapi.com/v1/images/search', {
      params: {api_key: process.env.REACT_APP_DOG_API_KEY, limit: limit || 20, breed_id: breed || ''}
    })

    dispatch(setCardInfo(data.data))
  }



  // async function getCatBreeds() {
  //   const data = await axios.get('https://api.thecatapi.com/v1/breeds', {
  //     params: {api_key: process.env.REACT_APP_CAT_API_KEY}
  //   })
  //   // const parsedData = data.data.map((each) => ({text: each.text}))

  //   console.log(data.data)
  // }

  
  useEffect(() => {
    if(params.breed === 'findMeADog') {
      getDogImages()
    } else {
      getCatImages() 
    }
    return () => { dispatch(clearCards()) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])
  
  useEffect(() => {
    if(matchFound) {
      dispatch(toggleMatchFound());
      history.push(`/found/${params.breed}/${cardsInfo[0].id}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchFound])
  

  return(
    <PageContainer>
      <Header />

      <ContentContainer ref={contentRef} isMobile={isMobile}>

        <div style={{gridArea: 'cards', display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <CardStack/>
          <p>
            <i class="fas fa-arrow-left" />
            {` swipe left to keep the ${params.breed === "findMeACat" ? "cat" : "dog"} or swipe right to remove`}
            <i class="fas fa-arrow-right" />
          </p>
          <CountContainer>
            <h2 style={{margin: 0}}>{cardsInfo.length} left</h2>
          </CountContainer>
        </div>

        {params.breed === 'findMeACat' && !isMobile && (
          <div style={{gridArea: "right"}}>
            <FactDisplay />
          </div>
        )}

      </ContentContainer>
      {/* <DogAutoComplete /> */}
      {/* <NavigationBar /> */}

    </PageContainer>
  )
}
