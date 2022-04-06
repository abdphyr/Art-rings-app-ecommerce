import React,{ useEffect, useState } from 'react';
import './favourites.css';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { FavouritesType } from './favouritesTypes';
import LargeProduct from '../../ui/product/LargeProduct';
import SmallProduct from '../../ui/product/SmallProduct';
import banner from '../../images/desctopVerticalBanner.png';
import mobileBanner from '../../images/mobileBanner.png';
import Pagination from '../../ui/pagination/Pagination';
import { RootState } from '../../app/store';
import { useSelector,useDispatch } from 'react-redux';
import { clearFavourites } from '../../features/favouriteSlice';

const Favourites = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const favourites = useSelector((state:RootState) => state.favourites)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    const [page, setPage] = useState(1)
    const crLength = Math.ceil((favourites.length / 4))
    
    const des_fv_products:React.CSSProperties = {
        width:`${100 * crLength}%`,
        display:'flex',
        flexWrap:'wrap',
        transition:'all 0.3s ease',
        transform:`translateX(-${(100 / crLength) * (page - 1)}%)`
    }

    const des_fv_product:React.CSSProperties = {
        width:`${50 / crLength}%`,
    }

    return (
        <>
            <div className='wrapper'>
                <Breadcrumb location={location} />
                <div className="favourites_title">
                    <div>избранное</div>
                    <button onClick={()=>dispatch(clearFavourites())} >УДАЛИТЬ ВСЕ</button>
                </div>
                {/* DESCTOP */}
                <div className="des_favourites">
                    <div className="des_fv_products_body">
                        <div style={des_fv_products} className="des_fv_products">
                            {favourites.map((favourite,i)=>(
                                <div key={i} style={des_fv_product} className="des_fv_product">
                                    <LargeProduct product={favourite.product} path={favourite.path} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="des_fv_banner">
                        <img src={banner} alt="" className="des_ctg_banner_image" />
                    </div>
                </div>
                <div className="fv_pagination_line"></div>
                {/* MOBILE */}
                <div className="mob_favourites">
                    <div className="mob_favourite_banner">
                        <img src={mobileBanner} alt="mobilebanner" className="mob_favourite_banner" />
                    </div>
                    <div className="mob_fv_products_body">
                        <div style={des_fv_products} className="mob_fv_products">
                            {favourites.map((favourite, i)=>(
                                <div key={i} style={des_fv_product} className="mob_fv_product">
                                    <SmallProduct product={favourite.product} path={favourite.path} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* PAGINATION */}
                <div className="fv_pagination">
                    <Pagination page={page} setPage={setPage} length={crLength} />
                </div>
            </div>
        </>
    );
};

export default Favourites;