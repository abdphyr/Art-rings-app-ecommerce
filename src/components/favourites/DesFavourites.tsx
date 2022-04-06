import React from 'react';
import banner from '../../images/desctopVerticalBanner.png';
import LargeProduct from '../../ui/product/LargeProduct';
import { FavouritesProps } from './favouritesTypes';



const DesFavourites: React.FC<FavouritesProps> = (props) => {
    const { favourites, fv_products, fv_product } = props
    return (
        <div className="des_favourites">
            <div className="des_fv_products_body">
                <div style={fv_products} className="des_fv_products">
                    {favourites.map((favourite, i) => (
                        <div key={i} style={fv_product} className="des_fv_product">
                            <LargeProduct product={favourite.product} path={favourite.path} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="des_fv_banner">
                <img src={banner} alt="" className="des_ctg_banner_image" />
            </div>
        </div>
    );
};

export default DesFavourites;