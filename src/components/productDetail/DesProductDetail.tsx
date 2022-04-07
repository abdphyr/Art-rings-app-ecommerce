import React from 'react';
import './desproductdetail.css';
import { IProductDetail } from './productDetailTypes';
import desctopVerticalBanner from '../../images/desctopVerticalBanner.png';
import ProductCarousel from '../../ui/carousel/ProductCarousel';
import DesDetTopInfo from './ui/DesDetTopInfo';
import Actions from './ui/Actions';
import DesReviewDesc from './ui/DesReviewDesc';
import DesImages from './ui/DesImages';

const DesProductDetail: React.FC<IProductDetail> = (props) => {
    const { product, recentlyProducts, isFavourite } = props;
    const { givenRating, handleRating } = props
    const { date, rating, images, reviews } = product;
    return (
        <>
            <DesDetTopInfo date={date} rating={rating} isFavourite={isFavourite} length={reviews.length} />
            <div className="des_pr_dt_info">
                <div className="des_pr_dt_info_left">
                    <DesImages images={images} />
                    <DesReviewDesc reviews={reviews} givenRating={givenRating} handleRating={handleRating} />
                </div>
                <div className="des_pr_dt_info_right">
                    <Actions {...props} />
                    <div className="des_pr_dt_banner">
                        <img src={desctopVerticalBanner} alt="image" />
                    </div>
                </div>
            </div>
            <div className="des_pr_dt_recently_viewed">
                <div className="des_pr_dt_recently_viewed_title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </div>
                <div className="des_pr_dt_recently_viewed_products">
                    <ProductCarousel recently={recentlyProducts} />
                </div>
            </div>
        </>
    );
};

export default DesProductDetail;