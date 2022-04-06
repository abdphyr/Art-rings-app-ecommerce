import React from 'react';
import brand from '../../images/mainlogo.png';
import mobileBanner from '../../images/mobileBanner.png';
import closebtn from "../../images/closebtnicon.svg";
import { delItemCart, incQu, decQu } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { CartProps } from './cartTypes'

const MobCart: React.FC<CartProps> = (props) => {
    const { cart, totalPrice, applic, setApplic } = props
    const dispatch = useDispatch();
    return (
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
    );
};

export default MobCart;