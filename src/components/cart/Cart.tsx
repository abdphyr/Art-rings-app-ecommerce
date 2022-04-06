import React, { useState, useEffect } from 'react';
import './cart.css';
import './applic.css';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import { useLocation } from 'react-router-dom';
import deleteCart from '../../images/deleteCart.svg';
import brand from '../../images/mainlogo.png';
import cartBanner from '../../images/cartBanner.png';
import mobileBanner from '../../images/mobileBanner.png';
import closebtn from "../../images/closebtnicon.svg";
import Applic from './Applic';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { delItemCart, incQu, decQu, clsCart } from '../../features/cartSlice';


const Cart: React.FC = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart)

    const [applic, setApplic] = useState(false)
    const location = useLocation()

    const totalPrice = cart.reduce((acc: number, item) => acc + item.totalPrice, 0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Applic applic={applic} setApplic={setApplic} />
            <div className="wrapper">
                <Breadcrumb location={location} />
            </div>
            <div className="cart_title_clear wrapper">
                <div className="cart_title">корзина</div>
                <div onClick={() => dispatch(clsCart())} className="cart_clear">УДАЛИТЬ ВСЕ</div>
            </div>
            {/*DESCTOP CART BODY */}
            <div className="des_cart_body wrapper">
                <div className="des_cart_left">
                    <div className="des_cart_items_header">
                        <div className="des_cart_header_space1"></div>
                        <div className="des_cart_header_name">Название</div>
                        <div className="des_cart_header_model">Модель</div>
                        <div className="des_cart_header_number">Кол-во</div>
                        <div className="des_cart_header_price">Цена</div>
                        <div className="des_cart_header_space2"></div>
                    </div>
                    <div className="des_cart_items">
                        {cart.map((item, i) => (
                            <div key={i} className="des_cart_item">
                                <div className="des_cart_item_image">
                                    <div>
                                        <img src={item.image} alt="Image" />
                                    </div>
                                    <div className="des_cart_item_image_brand">
                                        <img src={brand} alt="brand" />
                                    </div>
                                </div>
                                <div className="des_cart_item_name">{item.date}</div>
                                <div className="des_cart_item_model">{item.model}</div>
                                <div className="des_cart_item_number">
                                    <button onClick={() => dispatch(incQu(item))} className="des_cart_item_number_btn">+</button>
                                    <div className="des_cart_item_number_value"><div>{item.quantity}</div></div>
                                    <button onClick={() => dispatch(decQu(item))} className="des_cart_item_number_btn">-</button>
                                </div>
                                <div className="des_cart_item_price">{item.totalPrice} ₽</div>
                                <button onClick={() => dispatch(delItemCart(item))} className="des_cart_item_delete">
                                    <img src={deleteCart} alt="deleteCart" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="des_cart_banner">
                        <img src={cartBanner} alt="cartBanner" />
                    </div>
                </div>
                <div className="des_cart_right">
                    <div className="des_cart_total_price_buy">
                        <div className="des_cart_total_price">
                            <div>Итого:</div>
                            <span>{totalPrice} ₽</span>
                        </div>
                        <button onClick={() => setApplic(!applic)} className="des_cart_total_buy">
                            ОФОРМИТЬ ЗАКАЗ
                        </button>
                    </div>
                </div>
            </div>
            {/*MOBILE CART BODY */}
            <div className="mob_cart_body">
                <div className="wrapper">
                    <div className="mob_cart_banner">
                        <img src={mobileBanner} alt="mob_cart_banner" />
                    </div>
                </div>
                <div className="mob_cart_items wrapper">
                    {cart.map((item, i) => (
                        <div key={i} className="mob_cart_item">
                            <div className="mob_cart_item_image">
                                <img src={item.image} alt="cart_image" />
                                <div className="mob_cart_item_item_image_brand">
                                    <img src={brand} alt="brand" />
                                </div>
                            </div>
                            <div className="mob_cart_item_details">
                                <div className="mob_cart_item_price">
                                    <div>{item.totalPrice} ₽</div>
                                    {item.discount && <span>{item.price} ₽</span>}
                                </div>
                                <div className="mob_cart_item_date">
                                    {item.date}
                                </div>
                                <div className="mob_cart_item_model">
                                    <span className='model'>Модель: </span><span> {item.model}</span>
                                </div>
                                <div className="mob_cart_item_number">
                                    <button onClick={() => dispatch(incQu(item))} className="mob_cart_item_number_btn">+</button>
                                    <div className="mob_cart_item_number_value"><div>{item.quantity}</div></div>
                                    <button onClick={() => dispatch(decQu(item))} className="mob_cart_item_number_btn">-</button>
                                </div>
                            </div>
                            <div onClick={() => dispatch(delItemCart(item))} className="mob_cart_item_delete">
                                <img src={closebtn} alt="closeBtn" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mob_cart_buy">
                    <div className="wrapper">
                        <div className="mob_cart_buy_total">
                            <div>Итого:</div><span>{totalPrice} ₽</span>
                        </div>
                        <div className="mob_cart_buy_discount">
                            <div>Скидка:</div><div>10 %</div>
                        </div>
                        <button onClick={() => setApplic(!applic)} className="mob_cart_total_buy">
                            ОФОРМИТЬ ЗАКАЗ
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;