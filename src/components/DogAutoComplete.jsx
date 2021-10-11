import { AutoComplete } from 'antd';
// import { useState } from 'react';
import dogBreeds from './dogBreeds.js';

// const options = [dogBreeds.map((dog) => ({label: dog, value: dog.split(' ').join('-')}))]
// console.log(options)

export default function DogAutoComplete() {
  // const [text, setText] = useState('')


  return(
    <AutoComplete
      placeholder="Have a breed in mind?"
      options={dogBreeds}
      // value={text}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      // onSelect={}
      style={{minWidth: '167px'}}
    />
  )
}

