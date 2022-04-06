import React, { useState } from 'react';
import './productcarousel.css';
import { ProductType } from '../product/productType';
import { RecentlyType } from '../../features/recentlySlice';
import prevstrelka from '../../images/prevstrelka.svg';
import nextstrelka from '../../images/nextstrelka.svg';
import ProductCarouselItem from './ProductCarouselItem';

interface ProductCarouselProps {
    recently?: RecentlyType[];
    products?: ProductType[];
    path?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
    const { products, path, recently } = props

    const [trs, setTrs] = useState(1)
    let MAX_PAGE = 0

    if (products) {
        MAX_PAGE = Math.ceil(products.length / 3)
    }
    if (recently) {
        MAX_PAGE = Math.ceil(recently.length / 3)
    }

    const items: React.CSSProperties = {
        transition: "all 0.5s ease",
        width: `${100 * MAX_PAGE}%`,
        transform: `translateX(-${(trs - 1) * (100 / MAX_PAGE)}%`
    }
    const itemStyle: React.CSSProperties = {
        width: `${100 / (3 * MAX_PAGE)}%`
    }
    const prev = () => {
        if (trs > 1) {
            setTrs(trs - 1)
        }
    }
    const next = () => {
        if (trs < MAX_PAGE) {
            setTrs(trs + 1)
        }
    }

    if (MAX_PAGE === 0) return <></>

    return (
        <div className="product_carousel">
            <div className="pr_cr_buttons">
                <button onClick={prev} className={(trs === 1 && 'disabled') + (" pr_cr_button")}>
                    <img src={prevstrelka} alt="strelka" />
                </button>
                <button onClick={next} className={(trs === MAX_PAGE && 'disabled') + (" pr_cr_button")}>
                    <img src={nextstrelka} alt="strelka" />
                </button>
            </div>
            <div style={items} className="pr_cr_items">
                {(products && path) ? products.map(item => (
                    <div key={item.id} style={itemStyle} className="pr_cr_item">
                        <ProductCarouselItem item={item} path={path} />
                    </div>
                ))
                    :
                    recently?.map(item => (
                        <div key={item.product.id} style={itemStyle} className="pr_cr_item">
                            <ProductCarouselItem item={item.product} path={item.path} />
                        </div>
                    ))}
            </div>
            <div className="pr_cr_line">
                {Array(MAX_PAGE).fill(MAX_PAGE).map((_, i) => (
                    <div key={i} onClick={() => setTrs(i + 1)} className={(trs === i + 1 && 'active') + (' pr_cr_line_item')}></div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;