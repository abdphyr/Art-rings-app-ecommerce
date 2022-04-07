import React from 'react';
import { Link } from 'react-router-dom';
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";
import menu from "../../images/Menu.svg";
import logo from "../../images/mainlogo.png";
import { IHeader } from './headerPropsType';

const DesNav: React.FC<IHeader> = (props) => {

    const { showMenu, setShowMenu, cartNumber, favouritesNumber } = props
    return (
        <div className="nav_section">
            <div className="nav_icon_logo">
                <div className="nav_logo">
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <img src={logo} alt="" />
                    </button>
                </div>
                <div className="nav_icon">
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <img src={menu} alt="MenuIcon" />
                    </button>
                </div>
            </div>
            <div className="nav_menu">
                <div className="nav_item">
                    <Link to="catalog/wedding">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
                </div>
                <div className="nav_item">
                    <Link to="catalog/ingagement">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
                </div>
                <div className="nav_item">
                    <Link to="catalog/weddingduet">СВАДЕБНЫЕ ДУЭТЫ</Link>
                </div>
                <div className="nav_item">
                    <Link to="/order">НА ЗАКАЗ</Link>
                </div>
            </div>
            <div className="nav_cart_heart">
                <div className="cart_icon">
                    {cartNumber > 0 && <div><span>{cartNumber}</span></div>}
                    <Link to="/cart">
                        <img src={cart} alt="cart" />
                    </Link>
                </div>
                <div className="heart_icon">
                    {favouritesNumber > 0 && <div><span>{favouritesNumber}</span></div>}
                    <Link to="/favourites">
                        <img src={heart} alt="heart" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DesNav;