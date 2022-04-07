import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../ui/product/productType';


export interface IRecently {
    product: IProduct;
    path: string;
}

const initialState: IRecently[] = []

export const recentlySlice = createSlice({
    name: 'recentlyReducer',
    initialState,
    reducers: {
        addItemRecently(state, action: PayloadAction<IRecently>): void {
            const index = state.findIndex(item => item.product.name === action.payload.product.name)
            if (index === -1) {
                state.unshift(action.payload)
                localStorage.setItem('recently', JSON.stringify(state))
            }
        }
    }
})

export const { addItemRecently } = recentlySlice.actions
export default recentlySlice

