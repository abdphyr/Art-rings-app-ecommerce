
export interface ProductType{
    id: number;
    name: string;
    description: string;
    model: string;
    date: string;
    rating: number;
    price: number;
    withStone: boolean;
    discount:number;
    tags: string[];
    image: string;
    images: {
        id: number;
        image: string;
    }[];
    reviews: {
        title: string;
        rating: number;
        description: string;
        date: string;
        img: string[];
    }[]
}
export interface ProductPropsType{
    product:ProductType;
    path:string;
    animation?:boolean
}

