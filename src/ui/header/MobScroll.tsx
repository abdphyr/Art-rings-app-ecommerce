import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderPropsType } from './headerPropsType';
import menuScroll from '../../images/MenuScroll.svg';
import cartScroll from "../../images/cartScroll.svg";
import heartScroll from "../../images/heartScroll.svg";
import searchScroll from "../../images/searchScroll.svg";
import { setSearch } from '../../features/searchSlice';

interface MobScroll {
    scroll: boolean;
    data: HeaderPropsType;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const MobScroll: React.FC<MobScroll> = ({ data, scroll, setShowSearch }) => {
    const { setShowMenu, showMenu, cartNumber, favouritesNumber } = data
    return (
        <div className={(scroll && 'scroll') + (" mob_scroll_nav_bar")}>
            <div className="wrapper mob_scroll">
                <div className="mob_scroll_nav_icon">
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <img src={menuScroll} alt="MenuIcon" />
                    </button>
                </div>
                <div className="mob_scroll_nav_info">
                    <div className="mob_scroll_nav_brand">
                        <Link to="/">art-rings</Link>
                    </div>
                </div>
                <div className="mob_scroll_nav_cart_heart_search">
                    <div className="mob_scroll_cart_icon">
                        {cartNumber > 0 && <div><span>{cartNumber}</span></div>}
                        <Link to="/cart">
                            <img src={cartScroll} alt="cart" />
                        </Link>
                    </div>
                    <div className="mob_scroll_heart_icon">
                        {favouritesNumber > 0 && <div><span>{favouritesNumber}</span></div>}
                        <Link to="/favourites">
                            <img src={heartScroll} alt="heart" />
                        </Link>
                    </div>
                    <button onClick={() => {
                        setShowSearch(false)
                        setSearch('')
                    }}
                        className="mob_search_icon">
                        <img
                            src={searchScroll}
                            className="mob_search_icon_image"
                            alt="searchIcon"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobScroll;