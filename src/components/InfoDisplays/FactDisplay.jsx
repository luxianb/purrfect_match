/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Spinner from "../Spinner"
import { Container } from "./components"

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const StyledButton = styled(Button)`
  background-color: rgba(255,255,255,.6);
  color: rgba(255, 23, 68, .8);
  border: 0;
`

const ToggleButton = props => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
)

export default function FactDisplay() {
  const [state, setState] = useState({
    facts: [],
    display: 0,
    status: 'initial'
  })
  const params = useParams()
  const isCat = params.type === "findMeACat";

  // function setFact(value) {setState({...state, facts: value})}
  // function setStatus(value) {setState({...state, status: value})}
  function setDisplay(value) {setState({...state, display: value})}


  useEffect(() =>{
    if (isCat) {
      async function getCatFact() {
        const data = await axios.get('https://cat-fact.herokuapp.com/facts')
        const parsedData = data.data.map((each) => ({text: each.text}))

        setState({...state, status: 'dataFetched', facts: parsedData})
      }
      getCatFact()
    }
  }, [])

  const ButtonRow = () => (
    <ButtonContainer>
      {state.display > 0 && (
        <ToggleButton 
          onClick={() => setDisplay(state.display - 1)} 
          label="Previous"
        />
      )}
      {state.display < state.facts.length - 1 && (
        <ToggleButton 
          onClick={() => setDisplay(state.display + 1)} 
          label="Next"
        />
      )}
    </ButtonContainer>
  )
  
  return(
    <Container>
      {/* <h2>{isCat ? "Cat" : "Dog"} Fact</h2> */}
      <h2>Did you know?</h2>
      {state.status !== 'initial' ? (<>
        <p>{state.facts[state.display].text}</p>
        <p>Fact {state.display + 1} of {state.facts.length}</p>
        <ButtonRow />
      </>)
      : <Spinner />}
    </Container>
  )
}