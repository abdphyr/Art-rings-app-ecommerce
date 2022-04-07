import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from "../../images/search.svg";
import { setSearch } from '../../features/searchSlice';
import { useDispatch } from "react-redux";

const DesExtraMenu: React.FC<{ search: string }> = ({ search }) => {
    const dispatch = useDispatch()
    return (
        <div className="extra_menu">
            <div className="extra_menu_links">
                <Link to="/studio" className="extra_menu_link">
                    Студия
                </Link>
                <Link to="/about" className="extra_menu_link">
                    О нас
                </Link>
                <Link to="deliveryandpayment" className="extra_menu_link">
                    Доставка и Оплата
                </Link>
                <Link to="guarantees" className="extra_menu_link">
                    Гарантии
                </Link>
                <Link to="/contact" className="extra_menu_link">
                    Отзывы
                </Link>
            </div>
            <div className="search_section">
                <div className="search_input">
                    <input
                        value={search}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        type="text"
                        placeholder="Поиск украшений" />
                </div>
                <div className="search_icon">
                    <img src={searchIcon} alt="search_icon" />
                </div>
            </div>
        </div>
    );
};

export default DesExtraMenu;