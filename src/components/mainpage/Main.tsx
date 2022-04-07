import React, { useEffect, useState } from "react";
import "./mainpage.css";
import briliant from '../../images/diamond.svg';
import MainCarousel from "../../ui/carousel/MainCarousel";
import ProductCarousel from "../../ui/carousel/ProductCarousel";
import SmallProduct from "../../ui/product/SmallProduct";
import { IProduct } from "../../ui/product/productType";
import { useGetProductsQuery } from '../../services/productsApi'
import MainPageCatalog from "./MainPageCatalog";
import ShowMoreButton from "../../ui/showmore/ShowMore";

const Main: React.FC = () => {

    const { data } = useGetProductsQuery('new')
    const products = data?.products as IProduct[]

    const [show, setShow] = useState(false)

    const limit: IProduct[] = []
    if (products) {
        Array(6).fill(6).forEach((_, i) => {
            limit.push(products[i])
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="mainpage">
                <div className="wrapper">
                    <MainCarousel />
                    <div className="briliant">
                        <div className="br_line"></div>
                        <div className="br_icon">
                            <img src={briliant} alt="briliant" />
                        </div>
                        <div className="br_line"></div>
                    </div>
                    <div className="br_title">
                        Бриллиант в подарок
                    </div>
                </div>
                <MainPageCatalog />
                <div className="wrapper">
                    <div className="new_products">
                        <div className="nw_prs_title">
                            НОВИНКИ
                        </div>
                        <div className="nw_prs_carousel">
                            <ProductCarousel products={products} path={'catalog/new/'} />
                        </div>
                        <div className="nw_prs_nocarousel">
                            {(show ? products : limit).map(product => (
                                <div key={product.id} className="nw_prs_nocarousel_item">
                                    <SmallProduct product={product} path={'catalog/new/'} />
                                </div>
                            ))}
                            <ShowMoreButton func={setShow} bool={show} length={products?.length} >
                                ПОКАЗАТЬ ЕЩЁ
                            </ShowMoreButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
