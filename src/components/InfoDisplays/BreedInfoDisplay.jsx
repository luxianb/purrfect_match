import { Space } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../Spinner"
import { Container } from "./components"

export default function BreedInfoDisplay() {
  const [info, setInfo] = useState({})
  const [status, setStatus] = useState("initial")
  const params = useParams()

  useEffect(() => {
    async function fetchCatBreedInfo(breedId) {
      const res = await axios.get('https://api.thecatapi.com/v1/breeds', {
        params: {api_key: process.env.REACT_APP_CAT_API_KEY}
      })
      // console.log('Cat Breeds',res.data)

      const breedInfo = res.data.filter((cat) => cat.id === breedId)[0];
      setInfo(breedInfo)
      setStatus('fetched')
    }
    
    async function fetchDogBreedInfo(breedId) {
      const res = await axios.get('https://api.thedogapi.com/v1/breeds', {
        params: {api_key: process.env.REACT_APP_DOG_API_KEY}
      })
      // console.log("Dog Breeds", res.data)
      
      const breedInfo = res.data.filter((dog) => dog.id === Number(breedId))[0];
      setInfo(breedInfo)
      setStatus('fetched')
    }

    switch(params.type) {
      case "findMeACat": fetchCatBreedInfo(params.breed);
        break;
      case "findMeADog": fetchDogBreedInfo(params.breed);
        break;
      default:
    }


  }, [params])

  return(
    <Container>
      {status === 'fetched' ? (
        <>
          <h2>{info.name}</h2>
          {params.type === 'findMeACat' && (<>
            <h5>{info.description}</h5>
            <h3 style={{marginBottom: 0}}>About</h3>
            <Space>
              <h4>Adaptability: {info.adaptability}</h4>
              <h4>Affection: {info.affection_level}</h4>
            </Space>
            <Space>
              <h4>Child Friendly: {info.child_friendly}</h4>
              <h4>Dog Friendly: {info.dog_friendly}</h4>
            </Space>
            <Space>
              <h4>Energy: {info.energy_level}</h4>
              <h4>Hypoallergenic: {info.hypoallergenic ? "Yes" : "No"}</h4>
            </Space>
          </>)}
          {params.type === 'findMeADog' && (<>
            <h5>{info.temperament}</h5>
            <h3 style={{marginBottom: 0}}>Life span: {info.life_span}</h3>
          </>)}
        </>
      ) : <Spinner />}
    </Container>
  )
}