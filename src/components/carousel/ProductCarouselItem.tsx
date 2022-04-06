import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../images/star1.svg';
import brand from '../../images/mainlogo.png';
import like from '../../images/like.svg';
import liked from '../../images/liked.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addItemFavourites, delItemFavourites } from '../../features/favouriteSlice';
import { RootState } from '../../app/store';
import { ProductType } from '../product/productType';
import { addItemRecently } from '../../features/recentlySlice';

interface PrCrItemProps {
    item: ProductType;
    path: string;
}

const ProductCarouselItem: React.FC<PrCrItemProps> = ({ item, path }) => {

    const dispatch = useDispatch()
    const favourites = useSelector((state: RootState) => state.favourites)

    const isFavourite = favourites.some(i => i.product.name === item.name)

    const handelFavourites = () => {
        if (isFavourite) {
            dispatch(delItemFavourites({ product: item, path }))
        } else {
            dispatch(addItemFavourites({ product: item, path }))
        }
    }

    return (
        <div className='pr_cr_element' >
            <div className="pr_cr_item_body">
                <div className="pr_cr_element_date_rating">
                    <div className="pr_cr_element_date">{item.date}</div>
                    <div className="pr_cr_element_rating">
                        {Array(item.rating).fill(item.rating).map((_, i) => (
                            <img key={i} src={star} alt="star" />
                        ))}
                    </div>
                </div>
                <Link to={`${path}${item.id}`}
                    onClick={() => dispatch(addItemRecently({ product: item, path: path }))}
                    className="pr_cr_element_img">
                    <img src={item.image} alt="ddede" />
                    <div className="pr_cr_element_brand">
                        <img src={brand} alt="ssss" />
                    </div>
                </Link>
                <div className="pr_cr_element_like_price">
                    <div onClick={handelFavourites} className="pr_cr_element_like">
                        {isFavourite
                            ?
                            <img src={liked} alt="like" />
                            :
                            <img src={like} alt="like" />}
                    </div>
                    <div className="pr_cr_element_price">
                        <div className={(item.discount === 0 && 'noshow') + (' pr_cr_element_price_discount')}>
                            {item.price}₽
                        </div>
                        <div className={(item.discount > 0 && 'color') + (' pr_cr_element_price_current')}>
                            {item.discount > 0 ? item.discount : item.price}₽
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCarouselItem;