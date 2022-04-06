import React, { useState, useEffect } from 'react';
import './cart.css';
import './applic.css';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import Applic from './Applic';
import { useDispatch, useSelector } from 'react-redux';
import { clsCart } from '../../features/cartSlice';
import DesCart from './DesCart';
import MobCart from './MobCart';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../app/store';

const Cart: React.FC = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart);
    const totalPrice = cart.reduce((acc: number, item) => acc + item.totalPrice, 0);
    const [applic, setApplic] = useState(false)
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const cartProps = { cart, totalPrice, applic, setApplic }

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
            <DesCart {...cartProps} />
            <MobCart {...cartProps} />
        </>
    );
};

export default Cart;