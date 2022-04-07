import { useEffect, useState } from "react";
import "./desctop.css";
import { Link } from "react-router-dom";
import map from "../../images/map-pin.svg";
import mail from "../../images/mail.svg";
import clock from "../../images/clock.svg";
import phone from "../../images/phone.svg";
import searchIcon from "../../images/search.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";
import menu from "../../images/Menu.svg";
import logo from "../../images/mainlogo.png";
import { Header } from "./headerPropsType";
import { useDispatch } from "react-redux";
import { setSearch } from '../../features/searchSlice';
import SocialIcons from "../socialicons/SocialIcons";
import DesScroll from "./DesScroll";

const DesHeader: React.FC<Header> = (props) => {

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
      <DesScroll data={props} scroll={scroll} />
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
    </>
  );
};

export default DesHeader;
