
import { IProduct } from "../../ui/product/productType"

export interface IFavourite {
    path: string;
    product: IProduct;
}

export interface IFavourites {
    favourites: IFavourite[];
    fv_products: React.CSSProperties;
    fv_product: React.CSSProperties;
}