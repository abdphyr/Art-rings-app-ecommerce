import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavbarPropsType } from "./navbarPropsType";
import fb from "../../images/FB.svg";
import ins from "../../images/INS.svg";
import tg from "../../images/TG.svg";
import wh from "../../images/WH.svg";
import vk from "../../images/VK.svg";
import navbarlogo from "../../images/mainlogo.png";
import closebtn from "../../images/closebtnicon.svg";



const NavbarMenu = ({...props}:NavbarPropsType) => {  
  const { showMenu, setShowMenu } = props
  
  return (
    <div className="navbar_menu" onClick={()=>setShowMenu(!showMenu)}>
      <div className="wrapper">
        <button onClick={()=>setShowMenu(!showMenu)} className="navbar_close_btn">
          <img src={closebtn} alt="close btn icon" />
        </button>
        <div className="navbar_main">
          <div className="navbar_logo">
            <img src={navbarlogo} alt="navbarlogo" />
          </div>
          <div className="navbar_main_item">
            <Link to="catalog/wedding">ОБРУЧАЛЬНЫЕ КОЛЬЦА</Link>
          </div>
          <div className="navbar_main_item">
            <Link to="catalog/ingagement">ПОМОЛВОЧНЫЕ КОЛЬЦА</Link>
          </div>
          <div className="navbar_main_item">
            <Link to="catalog/weddingduet">СВАДЕБНЫЕ ДУЭТЫ</Link>
          </div>
          <div className="navbar_main_item">
            <Link to="order">НА ЗАКАЗ</Link>
          </div>
        </div>
        <div className="navbar_line"></div>
        <div className="navbar_row">
          <div className="navbar_col">
            <div className="navbar_info_item">
              <Link to="notfound">Все обручальные кольца</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="notfound">Необычные обручальные кольца</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="notfound">Классические обручальные кольца</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="notfound">Помолвочные кольца</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="notfound">Кольца с лебедями</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="notfound">Обручальные кольца парные</Link>
            </div>
          </div>
          <div className="navbar_col">
            <div className="navbar_info_item">
              <Link to="studio">Студия</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="about">О нас</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="deliveryandpayment">Доставка и Оплата</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="guarantees">Гарантии</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="contact">Отзывы</Link>
            </div>
          </div>
          <div className="navbar_col">
            <div className="navbar_info_item">
              <Link to="buy/wedding">Бриллиант в подарок</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="buy/ingagement">Как выбрать обручальные кольца</Link>
            </div>
            <div className="navbar_info_item">
              <Link to="buy/weddingduet">О помолвочных кольцах</Link>
            </div>
            <div className="navbar_icons nav_mob_hide_icons">
              <a href="#" className="navbar_social_icon">
                <img
                  src={fb}
                  alt="navbar_social_icon"
                  className="navbar_social_icon_img"
                />
              </a>
              <a href="#" className="navbar_social_icon">
                <img
                  src={vk}
                  alt="navbar_social_icon"
                  className="navbar_social_icon_img"
                />
              </a>
              <a href="#" className="navbar_social_icon">
                <img
                  src={wh}
                  alt="navbar_social_icon"
                  className="navbar_social_icon_img"
                />
              </a>
              <a href="#" className="navbar_social_icon">
                <img
                  src={ins}
                  alt="navbar_social_icon"
                  className="navbar_social_icon_img"
                />
              </a>
              <a href="#" className="navbar_social_icon">
                <img
                  src={tg}
                  alt="navbar_social_icon"
                  className="navbar_social_icon_img"
                />
              </a>
            </div>
          </div>
          <div className="navbar_col">
            <div className="navbar_info_title">КОНТАКТЫ</div>
            <div className="navbar_info_phone">+7(977) 841 23 40</div>
            <div className="navbar_info_phone">+7(499) 940 87 77</div>
            <div className="navbar_info_item">
              <a className="nav_mob_fw">info@art-rings.ru</a>
            </div>
          </div>
          <div className="navbar_col">
            <div className="navbar_info_item">
              <a className="nav_mob_fw">
                Москва, Большой Кисловский переулок, 5-7с1
              </a>
            </div>
            <div className="navbar_info_item desc_hide_item">
              <a className="nav_mob_fw">
                <div>пн-пт 11:00-20:00</div>
                <div>сб, вс 11:00-17:00</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
