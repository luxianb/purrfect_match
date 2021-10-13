import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../slice/imagesSlice'
import displayReducer from '../slice/displaySlice'

export default configureStore({
  reducer: {
    cards: cardsReducer,
    display: displayReducer
  },
})