import React from 'react';
import { Link } from 'react-router-dom';
import menuScroll from '../../images/MenuScroll.svg';
import cartScroll from "../../images/cartScroll.svg";
import heartScroll from "../../images/heartScroll.svg";
import searchScroll from "../../images/searchScroll.svg";
import { IHeader } from './headerPropsType';
import { useDispatch } from "react-redux";
import { setSearch } from '../../features/searchSlice';

interface IDesScroll {
    data: IHeader;
    scroll: boolean;
}

const DesScroll: React.FC<IDesScroll> = ({ data, scroll }) => {
    const dispatch = useDispatch()
    const { setShowMenu, showMenu, search, cartNumber, favouritesNumber } = data
    return (
        <div className={(scroll && 'active') + (" scroll_nav_section")}>
            <div className="wrapper des_scroll">
                <div className="scroll_icon_brand">
                    <button className="scroll_icon" onClick={() => setShowMenu(!showMenu)}>
                        <img src={menuScroll} alt="MenuIcon" />
                    </button>
                    <div className="scroll_brand">
                        <Link to="/">art-rings</Link>
                    </div>
                </div>
                <div className="scroll_search">
                    <input
                        value={search}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        type="text"
                        placeholder="Поиск украшений" />
                    <button className="scroll_search_icon">
                        <img src={searchScroll} alt="search_icon" />
                    </button>
                </div>
                <div className="scroll_cart_heart">
                    <div className="scroll_cart_icon">
                        {cartNumber > 0 && <div><span>{cartNumber}</span></div>}
                        <Link to="/cart">
                            <img src={cartScroll} alt="cart" />
                        </Link>
                    </div>
                    <div className="scroll_heart_icon">
                        {favouritesNumber > 0 && <div><span>{favouritesNumber}</span></div>}
                        <Link to="/favourites">
                            <img src={heartScroll} alt="heart" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesScroll;