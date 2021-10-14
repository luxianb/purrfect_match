/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { PresentationCard } from "../../components/ImageCard";
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../../components/Header';
import styled from "styled-components";
import { clearCards } from "../../redux/slice/imagesSlice";



export default function MatchFoundPage() {
  const [cardInfo, setCardInfo] = useState()
  const {display, cards} = useSelector(state => state)
  const dispatch = useDispatch()
  const isComputer = display.width >= 768;
  const param = useParams()

  useEffect(() => {
    dispatch(clearCards())
    let url
    if (param.type === 'findMeADog') {
      url = `https://api.thedogapi.com/v1/images/${param.id}`
    } else {
      url = `https://api.thecatapi.com/v1/images/${param.id}`
    }

    async function getImage() {
      const data = await axios.get(url)
      console.log(data.data)
      setCardInfo(data.data)
    }

    getImage()

  }, [])

  console.log(cards)
  return(
    <Page>
      <Header />
      {cardInfo?.url &&
        <PresentationCard image={cardInfo.url}/>
      }
      <h1>Match found!</h1>
      <p>Not satisfied with your result? {isComputer ? "Click" : "Tap"} <Link to={(`/match/${param.type}${param.breed ? `/${param.breed}`: ''}`)}>here</Link> to try again</p>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`