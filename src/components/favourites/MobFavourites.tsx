import React from 'react';
import SmallProduct from '../../ui/product/SmallProduct';
import mobileBanner from '../../images/mobileBanner.png';
import { IFavourites } from './favouritesTypes';

const MobFavourites: React.FC<IFavourites> = (props) => {
    const { favourites, fv_products, fv_product } = props
    return (
        <div className="mob_favourites">
            <div className="mob_favourite_banner">
                <img src={mobileBanner} alt="mobilebanner" className="mob_favourite_banner" />
            </div>
            <div className="mob_fv_products_body">
                <div style={fv_products} className="mob_fv_products">
                    {favourites.map((favourite, i) => (
                        <div key={i} style={fv_product} className="mob_fv_product">
                            <SmallProduct product={favourite.product} path={favourite.path} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobFavourites;