import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "user",
    initialState: {
        currentUser: {}
    },
    reducers: {
        userAdded: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export default slice.reducer

export const { userAdded } = slice.actions