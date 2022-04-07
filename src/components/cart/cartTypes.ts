import { IProduct } from "../../ui/product/productType";

export interface IApplic {
    applic: boolean;
    setApplic: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ICartItem extends IProduct {
    quantity: number;
    totalPrice: number;
}

export interface ICart {
    cart: ICartItem[];
    totalPrice: number;
    applic: boolean;
    setApplic: React.Dispatch<React.SetStateAction<boolean>>
}