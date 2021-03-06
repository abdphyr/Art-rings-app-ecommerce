import { IProduct } from "../../ui/product/productType";
import { Location } from "react-router-dom";

export interface ICatalog {
    products: IProduct[];
    title?: string;
    description?: string;
    sortOptions: string[];
    filterPriceOptions: {
        title: string;
        min: number;
        max: number;
    }[],
    filterInsertOptions: string[];
    filterTagOptions: string[];
    filterPrice: {
        title: string;
        min: number;
        max: number;
    };
    location: Location;
    viewSrtOpt: boolean;
    setViewSrtOpt: React.Dispatch<React.SetStateAction<boolean>>;
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
    handlePrice: (item: {
        title: string;
        min: number;
        max: number;
    },
        filterPrice: {
            title: string;
            min: number;
            max: number;
        }) => void
    filterInsert: string;
    handleInsert: (item: string, filterInsert: string) => void;
    filterTags: string[];
    handleTag: (item: string, filterInsert: string[]) => void;
    setFilterPrice: React.Dispatch<React.SetStateAction<{
        title: string;
        min: number;
        max: number;
    }>>;
    setFilterInsert: React.Dispatch<React.SetStateAction<string>>;
    setFilterTag: React.Dispatch<React.SetStateAction<string[]>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICatalogData {
    title: string;
    description: string;
    products: IProduct[]
}

export interface ISort {
    viewSrtOpt: boolean;
    setViewSrtOpt: React.Dispatch<React.SetStateAction<boolean>>;
    sortOptions: string[];
    setSort: React.Dispatch<React.SetStateAction<string>>;
    sort: string;
}