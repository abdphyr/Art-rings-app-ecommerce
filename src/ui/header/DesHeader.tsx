import { useEffect, useState } from "react";
import "./desctop.css";
import { Link } from "react-router-dom";
import map from "../../images/map-pin.svg";
import mail from "../../images/mail.svg";
import clock from "../../images/clock.svg";
import phone from "../../images/phone.svg";
import searchIcon from "../../images/search.svg";
import fb from "../../images/FB.svg";
import ins from "../../images/INS.svg";
import tg from "../../images/TG.svg";
import wh from "../../images/WH.svg";
import vk from "../../images/VK.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";
import menu from "../../images/Menu.svg";
import logo from "../../images/mainlogo.png";
import menuScroll from '../../images/MenuScroll.svg';
import cartScroll from "../../images/cartScroll.svg";
import heartScroll from "../../images/heartScroll.svg";
import searchScroll from "../../images/searchScroll.svg";
import { HeaderPropsType } from "./headerPropsType";
import { useDispatch } from "react-redux";
import { setSearch } from '../../features/searchSlice';
import SocialIcons from "../socialicons/SocialIcons";

const DesHeader = ({ ...props }: HeaderPropsType) => {

  const { showMenu, setShowMenu } = props
  const { search, favouritesNumber, cartNumber } = props
  const dispatch = useDispatch()

  const [userWidth, setUserWidth] = useState(document.body.clientWidth)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setUserWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      if (userWidth > 1400) {
        setScroll(window.scrollY > 330)
      }
      if (userWidth < 1400 && userWidth > 1200) {
        setScroll(window.scrollY > 315)
      }
      if (userWidth < 1200 && userWidth > 991) {
        setScroll(window.scrollY > 300)
      }
      if (userWidth < 991 && userWidth > 767) {
        setScroll(window.scrollY > 265)
      }
      if (userWidth < 767 && userWidth > 576) {
        setScroll(window.scrollY > 240)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <div className="info">
        <div className="wrapper">
          <div className="info_row">
            <div className="col">
              <div className="adress">
                <div className="icon">
                  <img src={map} alt="rasm" />
                </div>
                <div className="title">
                  Москва, Большой Кисловский переулок, 5-7с1
                </div>
              </div>
              <div className="email">
                <div className="icon">
                  <img src={mail} alt="rasm" />
                </div>
                <div className="title">info@art-rings.ru</div>
              </div>
            </div>
            <div className="col work_time">
              <div className="icon">
                <img src={clock} alt="rasm" />
              </div>
              <div>
                <div className="title">пн-пт 11:00-20:00</div>
                <div className="title">сб, вс 11:00-17:00</div>
              </div>
            </div>
            <div className="col phone_number">
              <div className="icon">
                <img src={phone} alt="rasm" />
              </div>
              <div>
                <div className="title">+7 (499) 940-87-77</div>
                <div className="title">+7 (977) 841-23-40</div>
              </div>
            </div>
            <div className="col social_icons">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
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
        <div className="nav_info">
          <div className="nav_brand">
            <Link to="/">art-rings</Link>
          </div>
          <div className="nav_title">
            <Link to="/">MOSCOW JEWELRY STUDIO</Link>
          </div>
        </div>
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
      </div>
      {/* SCROLL HEADER SECTION */}
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
    </>
  );
};

export default DesHeader;
