import { ProductType } from "../components/product/productType"

interface Filter {
    byPrice: {
        title: string;
        min: number;
        max: number;
    };
    byInsert: string;
    byTags: string[];
}

const sortData = (products:ProductType[], sort:string) => {

    let willSortProducts = [...products]
       
    if(sort === 'По умолчанию'){
       willSortProducts = willSortProducts.sort((a, b) => a.id > b.id ? 1 : -1)      
    }

    if(sort === 'Название (А - Я)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }

    if(sort === 'Название (Я - А)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            -a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }

    if(sort === 'Цена (низкая > высокая)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            a.price > b.price ? 1 : -1)
    }

    if(sort === 'Цена (высокая > низкая)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            a.price < b.price ? 1 : -1)
    }

    if(sort === 'Рейтинг (начиная с высокого)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            a.rating < b.rating ? 1 : -1)
    }

    if(sort === 'Рейтинг (начиная с низкого)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            a.rating > b.rating ? 1 : -1)
    }
    if(sort === 'Модель (А - Я)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            a.model.toLowerCase().localeCompare(b.model.toLowerCase()))
    }

    if(sort === 'Модель (Я - А)'){
        willSortProducts = willSortProducts.sort((a, b) =>
            -a.model.toLowerCase().localeCompare(b.model.toLowerCase()))
    }

    return willSortProducts
}

const filterData = (sortedProducts:ProductType[], filter:Filter, search:string):ProductType[] => {

    let willFilterProducts = [...sortedProducts]
    const { byPrice, byInsert, byTags } = filter

    if(byPrice.title){
        willFilterProducts = willFilterProducts.filter(item => (item.price >= byPrice.min && item.price <= byPrice.max ))         
    }

    if(byInsert){
        if(byInsert === 'с камнями'){
            willFilterProducts = willFilterProducts.filter(item => item.withStone)
        }else{
            willFilterProducts = willFilterProducts.filter(item => !item.withStone)
        }
    }

    if(byTags.length !== 0){
        willFilterProducts = willFilterProducts.filter(item => byTags.some(tag => {
            for(let i = 0; i < item.tags.length; i++){
                if(tag === item.tags[i]){
                    return true
                }
            }
        }))   
    }

    if(search){
        willFilterProducts = willFilterProducts.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase()))
    }

    return willFilterProducts
}


export const sortFilterData = ( prts:ProductType[], sort:string, filter:Filter, search:string ) => {      
    const sortedProducts = sortData(prts, sort)
    const filteredSortedProducts = filterData(sortedProducts, filter, search)
    return filteredSortedProducts
}
