
import { ProductType } from "../../ui/product/productType"

export interface FavouritesType {
    path: string;
    product: ProductType
}

export interface FavouritesProps {
    favourites: FavouritesType[];
    fv_products: React.CSSProperties;
    fv_product: React.CSSProperties;
}