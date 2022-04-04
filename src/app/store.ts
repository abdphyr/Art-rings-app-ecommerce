
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import favouritesSlice from '../features/favouriteSlice';
import searchSlice from '../features/searchSlice';
import recentlySlice from '../features/recentlySlice';
import { productsApi } from '../services/productsApi';
    
export const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        favourites:favouritesSlice.reducer,
        search:searchSlice.reducer,
        recently:recentlySlice.reducer,
        [productsApi.reducerPath]:productsApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType< typeof store.getState >
export type AppDispatch = typeof store.dispatch