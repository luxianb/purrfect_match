import { createSlice } from '@reduxjs/toolkit'
import { useHistory } from 'react-router';

export const imageSlice = createSlice({
  name: 'cards',
  initialState: {
    cardsInfo: [],
    matchFound: false,
  },
  reducers: {
    setCardInfo: (state, action) => {
      state.cardsInfo = action.payload
    },

    moveCardToBack: (state) => {
      state.cardsInfo = state.cardsInfo.push(state.cardsInfo.shift())
    },

    addCardToRandomPosition: (state, action) => {
      const minPosition = 2; 
      const position = Math.floor(Math.random() * (state.cardsInfo.length - minPosition) + minPosition)

      const tempArr = [...state.cardsInfo]
      tempArr.splice(position, 0, tempArr.shift())

      state.cardsInfo = tempArr
    },

    removeCard: (state) => {
      const returnArr = [...state.cardsInfo]
      returnArr.shift()

      state.cardsInfo = returnArr

      if (returnArr.length === 1) {
        state.matchFound = true
      }
    },
    toggleMatchFound: (state) => {
      state.cardsInfo = !state.matchFound
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCardInfo, addCardToRandomPosition, removeCard, toggleMatchFound } = imageSlice.actions

export default imageSlice.reducer