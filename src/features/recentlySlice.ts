import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../components/product/productType';

export interface RecentlyType {
    product: ProductType;
    path: string;
}

const initialState: RecentlyType[] = []

export const recentlySlice = createSlice({
    name: 'recentlyReducer',
    initialState,
    reducers: {
        addItemRecently(state, action: PayloadAction<RecentlyType>): void {
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

