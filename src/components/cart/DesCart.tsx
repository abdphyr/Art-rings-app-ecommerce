import React from 'react';
import deleteCart from '../../images/deleteCart.svg';
import brand from '../../images/mainlogo.png';
import cartBanner from '../../images/cartBanner.png';
import { delItemCart, incQu, decQu } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { ICart } from './cartTypes';

const DesCart: React.FC<ICart> = (props) => {
    const { cart, totalPrice, applic, setApplic } = props
    const dispatch = useDispatch();
    return (
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
    );
};

export default DesCart;