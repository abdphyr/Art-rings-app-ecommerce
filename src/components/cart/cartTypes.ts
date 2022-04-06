import { ProductType } from "../../ui/product/productType";

export interface ApplicPropsType {
    applic: boolean;
    setApplic: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface CartItemType extends ProductType {
    quantity: number;
    totalPrice: number;
}

export interface CartProps{
    cart:CartItemType[];
    totalPrice:number;
    applic:boolean;
    setApplic:React.Dispatch<React.SetStateAction<boolean>>
}