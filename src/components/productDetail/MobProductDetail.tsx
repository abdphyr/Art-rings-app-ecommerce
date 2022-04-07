import React, { useState } from 'react';
import './mobproductdetail.css';
import { IProductDetail } from './productDetailTypes';
import SmallProduct from '../../ui/product/SmallProduct';
import mobileBanner from '../../images/mobileBanner.png';
import MobDetTopInfo from './ui/MobDetTopInfo';
import Actions from './ui/Actions';
import MobRevDesc from './ui/MobRevDesc';
import MobImages from './ui/MobImages';
import ShowMoreButton from '../../ui/showmore/ShowMore';

const MobProductDetail: React.FC<IProductDetail> = (props) => {
    const { recentlyProducts, product, isFavourite } = props
    const { givenRating, handleRating } = props;
    const { date, rating, images, reviews } = product
    const [showAllProducts, setShowAllProducts] = useState(false);
    const limitProducts = showAllProducts ? recentlyProducts : recentlyProducts.length > 6 ? Array(6).fill(6).map((_, i) => recentlyProducts[i]) : recentlyProducts
    return (
        <>
            <MobDetTopInfo date={date} rating={rating} isFavourite={isFavourite} length={reviews.length} />
            <div className="mob_pr_dt_info">
                <MobImages images={images} />
                <Actions {...props} />
                <div className="mob_pr_dt_banner">
                    <img src={mobileBanner} alt="image" />
                </div>
                <MobRevDesc reviews={reviews} handleRating={handleRating} givenRating={givenRating} />
            </div>
            <div className="mob_pr_dt_recently_viewed">
                <div className="mob_pr_dt_recently_viewed_title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </div>
                <div className="mob_pr_dt_recently_viewed_products">
                    {limitProducts.map(recentlyProduct => (
                        <div key={recentlyProduct.product.name} className="mob_pr_dt_recently_viewed_product">
                            <SmallProduct product={recentlyProduct.product} path={recentlyProduct.path} />
                        </div>
                    ))}
                </div>
                <ShowMoreButton func={setShowAllProducts} bool={showAllProducts} length={recentlyProducts?.length} >
                    ПОКАЗАТЬ ЕЩЁ
                </ShowMoreButton>
            </div>
        </>
    );
};

export default MobProductDetail;