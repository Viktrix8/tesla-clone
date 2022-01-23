import { configureStore } from '@reduxjs/toolkit'
import reducer from "./user"

const store = configureStore({
    reducer
})

export default store