import React, { useEffect, useState } from 'react';
import './favourites.css';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import { useLocation } from 'react-router-dom';
import Pagination from '../../ui/pagination/Pagination';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavourites } from '../../features/favouriteSlice';
import DesFavourites from './DesFavourites';
import MobFavourites from './MobFavourites';

const Favourites: React.FC = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const favourites = useSelector((state: RootState) => state.favourites)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [page, setPage] = useState(1)
    const crLength = Math.ceil((favourites.length / 4))

    const fv_products: React.CSSProperties = {
        width: `${100 * crLength}%`,
        display: 'flex',
        flexWrap: 'wrap',
        transition: 'all 0.3s ease',
        transform: `translateX(-${(100 / crLength) * (page - 1)}%)`
    }

    const fv_product: React.CSSProperties = {
        width: `${50 / crLength}%`,
    }

    return (
        <>
            <div className='wrapper'>
                <Breadcrumb location={location} />
                <div className="favourites_title">
                    <div>избранное</div>
                    <button onClick={() => dispatch(clearFavourites())} >УДАЛИТЬ ВСЕ</button>
                </div>
                <DesFavourites favourites={favourites} fv_products={fv_products} fv_product={fv_product} />
                <div className="fv_pagination_line"></div>
                <MobFavourites favourites={favourites} fv_products={fv_products} fv_product={fv_product} />
                <div className="fv_pagination">
                    <Pagination page={page} setPage={setPage} length={crLength} />
                </div>
            </div>
        </>
    );
};

export default Favourites;