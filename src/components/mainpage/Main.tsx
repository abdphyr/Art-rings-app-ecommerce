import React, {useEffect, useState} from "react";
import "./mainpage.css";
import briliant from '../../images/diamond.svg';
import MainCarousel from "../../ui/carousel/MainCarousel";
import ProductCarousel from "../../ui/carousel/ProductCarousel";
import SmallProduct from "../../ui/product/SmallProduct";
import { ProductType } from "../../ui/product/productType";
import { useGetProductsQuery } from '../../services/productsApi'
import MainPageCatalog from "./MainPageCatalog";

const Main:React.FC = () => {

    const { data } = useGetProductsQuery('new')
    const products:ProductType[] = data?.products

    const [show, setShow] = useState(false)
    
    const limit:ProductType[] = []
    if(products){
        Array(6).fill(6).forEach((_, i) => {
            limit.push(products[i])
        })
    }

    useEffect(() => {
        window.scrollTo(0,0 )
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
                        <button onClick={()=>setShow(!show)} className="nw_prs_show_more_btn">
                            ПОКАЗАТЬ ЕЩЁ
                            <span className={(show && 'active')+(" nw_prs_show_more_btn_icon")}>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    };

export default Main;
