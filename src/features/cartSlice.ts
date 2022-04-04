import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { CartItemType } from '../components/cart/cartTypes';
import { ProductType } from '../components/product/productType';

const initialState:CartItemType[] = []

export const cartSlice = createSlice({
    name:'cartReducer',
    initialState,
    reducers:{
        addItemCart(state,action:PayloadAction<ProductType | CartItemType>):void{
            const payload = action.payload
            const index = state.findIndex(item => item.name === payload.name) 
            
            if(index === -1){
                if ('quantity' in action.payload){
                    state.unshift(action.payload)
                }else{
                    const newItem = {...payload, quantity:1, totalPrice:payload.price}
                    state.unshift(newItem)
                }
            }else{
                state[index].quantity++
                state[index].totalPrice = state[index].quantity * payload.price
            }
            localStorage.setItem('cart', JSON.stringify(state))
        }, 

        delItemCart(state, action:PayloadAction<ProductType>):void{
            const payload = action.payload
            const index = state.findIndex(item => item.name === payload.name) 
            state.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(state))
        }, 

        incQu(state, action:PayloadAction<ProductType>):void{
            const payload = action.payload
            const index = state.findIndex(item => item.name === payload.name)
            state[index].quantity++     
            state[index].totalPrice = state[index].quantity * payload.price
            localStorage.setItem('cart', JSON.stringify(state))
        }, 

        decQu(state, action:PayloadAction<ProductType>):void{
            const payload = action.payload
            const index = state.findIndex(item => item.name === payload.name)
           
            if(state[index].quantity > 1){
                state[index].quantity--     
                state[index].totalPrice = state[index].quantity * payload.price
            }else{
                state.splice(index, 1)
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        
        clsCart(state):void{
            state.length = 0
            localStorage.removeItem('cart')
        }
    },
})


export const { addItemCart,delItemCart,incQu,decQu,clsCart } = cartSlice.actions
export default cartSlice