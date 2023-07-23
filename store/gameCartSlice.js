'use client'

import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    reviews:[],
}

export const gameCartSlice = createSlice({
    name: 'gameCart',
    initialState,
    reducers: {
        addUserReview(state,action) {
            state.reviews.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addUserReview} = gameCartSlice.actions

export default gameCartSlice.reducer;