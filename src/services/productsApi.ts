import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://my.api.mockaroo.com/rings";

export const productsApi = createApi({
    reducerPath:"productReducer",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getProducts:builder.query({
            query:(catalog:string) => `/${catalog}?key=1c7ce460`
        })
    }),

})

export const { useGetProductsQuery } = productsApi