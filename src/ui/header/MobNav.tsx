import React from 'react';
import { Link } from 'react-router-dom';
import { IHeader } from './headerPropsType';
import menu from "../../images/Menu.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";

interface IMobNav {
    data: IHeader;
    showSearch: boolean;
}

const MobNav: React.FC<IMobNav> = ({ data, showSearch }) => {
    const { showMenu, setShowMenu, cartNumber, favouritesNumber } = data
    return (
        <div className={(showSearch && 'hide') + (" mob_nav_bar")}>
            <div className="mob_nav_icon">
                <button onClick={() => setShowMenu(!showMenu)}>
                    <img src={menu} alt="MenuIcon" />
                </button>
            </div>
            <div className="mob_nav_info">
                <div className="mob_nav_brand">
                    <Link to="/">art-rings</Link>
                </div>
                <div className="mob_nav_title">
                    <Link to="/">MOSCOW JEWELRY STUDIO</Link>
                </div>
            </div>
            <div className="mob_nav_cart_heart">
                <div className="mob_cart_icon">
                    {cartNumber > 0 && <div><span>{cartNumber}</span></div>}
                    <Link to="/cart">
                        <img src={cart} alt="cart" />
                    </Link>
                </div>
                <div className="mob_heart_icon">
                    {favouritesNumber > 0 && <div><span>{favouritesNumber}</span></div>}
                    <Link to="/favourites">
                        <img src={heart} alt="heart" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobNav;