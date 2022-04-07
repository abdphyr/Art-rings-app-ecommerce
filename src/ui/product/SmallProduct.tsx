import React from 'react';
import { Link } from 'react-router-dom';
import { IProductPath } from './productType';
import './smallproduct.css';
import star from '../../images/star1.svg';
import like from '../../images/like.svg';
import liked from '../../images/liked.svg';
import brand from '../../images/mainlogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { addItemFavourites, delItemFavourites } from '../../features/favouriteSlice';
import { RootState } from '../../app/store';
import { addItemRecently } from '../../features/recentlySlice';

const SmallProduct: React.FC<IProductPath> = (props) => {

    const { product, path } = props
    const { id, name, date, rating, price, image, discount } = product

    const dispatch = useDispatch()
    const favourites = useSelector((state: RootState) => state.favourites)

    const isFavourite = favourites.some(item => item.product.name === name)

    const handelFavourites = () => {
        if (isFavourite) {
            dispatch(delItemFavourites({ product, path }))
        } else {
            dispatch(addItemFavourites({ product, path }))
        }
    }

    return (
        <div className='sm_pr_element'>
            <div className="sm_pr_element_date_rating_like">
                <div className="sm_pr_element_date_rating">
                    <div className="sm_pr_element_date">{date}</div>
                    <div className="sm_pr_element_rating">
                        {Array(rating).fill(rating).map((_, i) => (
                            <img key={i} src={star} alt="star" />
                        ))}
                    </div>
                </div>
                <div onClick={handelFavourites} className="sm_pr_element_like">
                    {isFavourite ?
                        <img src={liked} alt="like" />
                        :
                        <img src={like} alt="like" />}
                </div>
            </div>
            <Link to={`${path}${id}`}
                onClick={() => dispatch(addItemRecently({ product: product, path: path }))}
                className="sm_pr_element_img">
                <img src={image} alt="" />
                <div className="sm_pr_element_brand">
                    <img src={brand} alt="" />
                </div>
            </Link>
            <div className="sm_pr_element_price">
                <div className={(discount > 0 && 'color') + (' sm_pr_element_price_current')}>
                    {discount > 0 ? discount : price}₽
                </div>
                <div className={(discount === 0 && 'noshow') + (' sm_pr_element_price_discount')}>
                    {price}₽
                </div>
            </div>
        </div>
    );
};

export default SmallProduct;