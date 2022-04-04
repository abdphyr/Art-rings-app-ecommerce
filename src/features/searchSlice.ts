import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState:string = ''

export const searchSlice = createSlice({
    name:'searchReducer',
    initialState,
    reducers:{
        setSearch:(state,action:PayloadAction<string>) => action.payload
    }
})

export default searchSlice
export const { setSearch } = searchSlice.actions