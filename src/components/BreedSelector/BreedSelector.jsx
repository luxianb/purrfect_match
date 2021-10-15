import {AutoComplete, Form, Select, Button, Input} from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"

export default function BreedSelector() {
  const [animal, setAnimal] = useState('cat')
  const [catBreeds, setCatBreeds] = useState([{label: "...fetching breed data"}])
  const [dogBreeds, setDogBreeds] = useState([{label: "...fetching breed data"}])
  const [options, setOptions] = useState([])
  const [value, setValue] = useState('')
  const history = useHistory()

  useEffect(() => {
    async function fetchCatBreeds() {
      const res = await axios.get('https://api.thecatapi.com/v1/breeds', {
        params: {api_key: process.env.REACT_APP_CAT_API_KEY}
      })
      console.log('Cat Breeds',res.data)

      const formatedData = res.data.map((each) => ({value: each.name, label: each.name, id: each.id}))
      setCatBreeds(formatedData)
    }

    async function fetchDogBreeds() {
      const res = await axios.get('https://api.thedogapi.com/v1/breeds', {
        params: {api_key: process.env.REACT_APP_DOG_API_KEY}
      })
      console.log("Dog Breeds", res.data)
      
      const formatedData = res.data.map((each) => ({value: each.name, label: each.name, id: each.id}))
      setDogBreeds(formatedData)
    }

    fetchCatBreeds()
    fetchDogBreeds()
  }, [])

  function onSearch(searchText) {
    let option;
    switch(animal) {
      case "cat": option = [...catBreeds]; break;
      case "dog": option = [...dogBreeds]; break;
      default: option = []; break
    }

    setOptions(
      !searchText ? option : option.filter((each) => each.value.toLowerCase().includes(searchText.toLowerCase())),
    );
  };

  function handlePageRoute() {
    let type;
    let breed;
    switch(animal) {
      case 'cat': 
        type = "findMeACat"; 
        breed = catBreeds.filter((cat) => cat.value === value)[0].id;
      break;
        case 'dog':
          type = "findMeADog"; 
          breed = dogBreeds.filter((dog) => dog.value === value)[0].id;
      break;
      default: 
    }


    history.push(`/match/${type}/${breed}`)
  }

  const AnimalSelector = () => (
    <Select 
      value={animal}
      onChange={(value) => setAnimal(value)}
    >
      <Select.Option value={'cat'}>Cat</Select.Option>
      <Select.Option value={'dog'}>Dog</Select.Option>
    </Select>
  )


  const SubmitButton = () => (
    <Button disabled={!value} onClick={handlePageRoute} type="primary">
      <i class="fa-solid fa-arrow-right" style={{margin: 0}} />
    </Button>
  )

  return (
    <Form onSubmit={(e) => {e.preventDefault()}}>
      <Input.Group compact>
        <AnimalSelector />
        <AutoComplete
          value={value}
          options={options}
          onSelect={(data) => console.log('onSelect', value)}
          onSearch={onSearch}
          onChange={(data) => setValue(data)}
          placeholder="Choose a breed"
          style={{
            minWidth: 200, textAlign: 'left'
          }}
        />
        <SubmitButton />
      </Input.Group>
    </Form>
    )
}