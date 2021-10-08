import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../slice/imagesSlice'

export default configureStore({
  reducer: {
    cards: cardsReducer
  },
})