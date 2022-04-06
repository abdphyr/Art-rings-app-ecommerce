import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import footerlogo from "../../images/footerlogo.png";
import FooterSocialIcons from "../socialicons/FooterSocialIcons";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer_items">
          <div className="footer_col_1">
            <div className="footer_logo">
              <img src={footerlogo} alt="footerlogo" />
            </div>
            <div className="footer_info_politcs">
              <Link to="politcs">
                Политика
                <br />
                конфиденциальности
              </Link>
            </div>
            <div className="footer_info_id">ИНН 672208547140</div>
            <div className="dewelopment_footer">
              Разработка сайта digital-foton
            </div>
          </div>
          <div className="footer_col_2 footer_info">
            <div className="footer_info_title">ИНФОРМАЦИЯ</div>
            <div className="footer_info_item">
              <Link to="studio">Студия</Link>
            </div>
            <div className="footer_info_item">
              <Link to="about">О нас</Link>
            </div>
            <div className="footer_info_item">
              <Link to="deliveryandpayment">Доставка и Оплата</Link>
            </div>
            <div className="footer_info_item">
              <Link to="guarantees">Гарантии</Link>
            </div>
            <div className="footer_info_item">
              <Link to="/contact">Отзывы</Link>
            </div>
          </div>
          <div className="footer_col_3">
            <div className="footer_info_title">ПОКУПАТЕЛЯМ</div>
            <div className="footer_info_item">
              <Link to="buy/wedding">Бриллиант в подарок</Link>
            </div>
            <div className="footer_info_item">
              <Link to="buy/ingagement">Как выбрать обручальные кольца</Link>
            </div>
            <div className="footer_info_item">
              <Link to="buy/weddingduet">О помолвочных кольцах</Link>
            </div>
          </div>
          <div className="footer_col_4">
            <div className="footer_info_title">АССОРТИМЕНТ</div>
            <div className="footer_info_item">
              <Link to="notfound">Все обручальные кольца</Link>
            </div>
            <div className="footer_info_item">
              <Link to="notfound">Необычные обручальные кольца</Link>
            </div>
            <div className="footer_info_item">
              <Link to="notfound">Классические обручальные кольца</Link>
            </div>
            <div className="footer_info_item">
              <Link to="notfound">Помолвочные кольца</Link>
            </div>
            <div className="footer_info_item">
              <Link to="notfound">Кольца с лебедями</Link>
            </div>
            <div className="footer_info_item">
              <Link to="notfound">Обручальные кольца парные</Link>
            </div>
          </div>
          <div className="footer_col_5">
            <div className="footer_info_title">КОНТАКТЫ</div>
            <div className="footer_info_phone">+7(977) 841 23 40</div>
            <div className="footer_info_phone">+7(499) 940 87 77</div>
            <div className="footer_info_item">
              <a className="mob_color">
                Москва, Большой Кисловский переулок, 5-7с1
              </a>
            </div>
            <div className="footer_info_item desc_hide_item">
              <a className="mob_color">
                <div>пн-пт 11:00-20:00</div>
                <div>сб, вс 11:00-17:00</div>
              </a>
            </div>
            <div className="footer_info_item">
              <a className="mob_color">info@art-rings.ru</a>
            </div>
            <div className="footer_icons mob_hide_icons">
              <FooterSocialIcons />
            </div>
          </div>
          <div className="footer_col_6">
            <div className="footer_icons">
              <FooterSocialIcons />
            </div>
          </div>
          <div className="footer_col_7">
            <div className="footer_info_politcs">
              <Link to="politcs">
                Политика
                <br />
                конфиденциальности
              </Link>
            </div>
            <div className="dewelopment_footer">
              Разработка сайта digital-foton
            </div>
          </div>
          <div className="footer_col_8">
            <div className="footer_info_id">ИНН 672208547140</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
