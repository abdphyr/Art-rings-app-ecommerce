import  { ProductType } from '../../ui/product/productType'
import React from 'react';

export interface ProductDetailTypes{
    product:ProductType;
    recentlyProducts:{
        product:ProductType,
        path:string;
    }[],
    sizes:{
        title: string;
        size: number;
    }[];
    maleSize:{
        title: string;
        size: number;
    };
    femaleSize:{
        title: string;
        size: number;
    };
    setMaleSize:React.Dispatch<React.SetStateAction<{
        title: string;
        size: number;
    }>>;
    setFemaleSize:React.Dispatch<React.SetStateAction<{
        title: string;
        size: number;
    }>>;
    flActive:boolean;
    mlActive:boolean;
    setFlActive:React.Dispatch<React.SetStateAction<boolean>>;
    setMlActive:React.Dispatch<React.SetStateAction<boolean>>;
    givenRating:number;
    handleRating(rating:number):void;
    isFavourite:boolean
}