import { ProductType } from "../product/productType";

export interface ApplicPropsType {
    applic: boolean;
    setApplic: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface CartItemType extends ProductType {
    quantity: number;
    totalPrice: number;
}