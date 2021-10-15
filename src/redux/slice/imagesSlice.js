import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardsInfo: [],
  matchFound: false,
};

export const imageSlice = createSlice({
  name: 'cards',
  initialState,
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

      if (state.cardsInfo.length === 1) {
         state.matchFound = true
      } else {
        const tempArr = [...state.cardsInfo]
        tempArr.splice(position, 0, tempArr.shift())
  
        state.cardsInfo = tempArr
      }

    },

    removeCard: (state) => {
      const returnArr = [...state.cardsInfo]
      if (state.cardsInfo.length === 1) {
       state.matchFound = true
      } else {
        returnArr.shift()
  
        state.cardsInfo = returnArr
  
        if (returnArr.length === 1) {
          state.matchFound = true
        }
      }
    },
    toggleMatchFound: (state) => {
      state.matchFound = false
    },
    clearCards: (state) => {
      state.cardsInfo = []
      state.matchFound = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCardInfo, addCardToRandomPosition, removeCard, toggleMatchFound, clearCards } = imageSlice.actions

export default imageSlice.reducer