import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavourite } from '../components/favourites/favouritesTypes';

const initialState: IFavourite[] = []

export const favouritesSlice = createSlice({
    name: 'favouritesReducer',
    initialState,
    reducers: {
        addItemFavourites(state, action: PayloadAction<IFavourite>): void {
            const index = state.findIndex(item => item.product.name === action.payload.product.name)
            if (index === -1) {
                state.unshift(action.payload)
                localStorage.setItem('favourites', JSON.stringify(state))
            }
        },
        delItemFavourites(state, action: PayloadAction<IFavourite>): void {
            const index = state.findIndex(item => item.product.name === action.payload.product.name)
            state.splice(index, 1)
            localStorage.setItem('favourites', JSON.stringify(state))
        },
        clearFavourites(state): void {
            state.length = 0
            localStorage.removeItem('favourites')
        }
    }
})

export const { addItemFavourites, delItemFavourites, clearFavourites } = favouritesSlice.actions
export default favouritesSlice

