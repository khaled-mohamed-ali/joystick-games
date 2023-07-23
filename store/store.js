'use client'
import { configureStore } from '@reduxjs/toolkit'
import gameCartSlice from "@/store/gameCartSlice";

 const Store = configureStore({
    reducer: {
        gameCart : gameCartSlice
    },
})
export default  Store