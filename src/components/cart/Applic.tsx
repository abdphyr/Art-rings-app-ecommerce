import React, { useState, useEffect } from 'react';
import './applic.css';
import navbarlogo from "../../images/mainlogo.png";
import closebtn from "../../images/closebtnicon.svg";
import { ApplicPropsType } from './cartTypes';
import MyInput from './MyInput';
import MyLabel from './MyLabel';

const Applic: React.FC<ApplicPropsType> = ({ applic, setApplic }) => {

    const [success, setSuccess] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [adress, setAdess] = useState('')

    useEffect(() => {
        applic ? document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'unset'
    }, [applic]);

    const handleClose = () => {
        setApplic(false)
        setSuccess(false)
    }

    return (
        <div onClick={() => setApplic(false)} className={(applic && 'active') + (' applic')}>
            <div onClick={(e) => e.stopPropagation()} className={(applic && 'active') + (" applic_body")}>
                <div className="applic_items">
                    <button onClick={handleClose} className="applic_close_btn">
                        <img src={closebtn} alt="close btn icon" />
                    </button>
                    <div className="applic_items_logo">
                        <img src={navbarlogo} alt="logo" />
                    </div>
                    {/* FORM APPLIC */}
                    <div className={(success && 'close') + (" form_applic")}>
                        <div className="applic_items_title">
                            <div className=''>ОСТАВЬТЕ ЗАЯВКУ</div>
                            <span>И мы свяжемся с вами для уточнения деталей заказа</span>
                        </div>
                        <form className='applic_items_form' action="">
                            <div className="applic_items_form_name">
                                <MyLabel className='applic_form_label' htmlFor="name">Ваше имя</MyLabel>
                                <MyInput type="text" placeholder='Ваше имя' className='applic_form_input' id='name' />
                            </div>
                            <div className="applic_items_form_phone_email">
                                <div className="applic_items_form_phone">
                                    <MyLabel htmlFor="phone" className='applic_form_label'>Ваш телефон</MyLabel>
                                    <MyInput placeholder='Ваш телефон' type="text" className='applic_form_input' id='phone' />
                                </div>
                                <div className="applic_items_form_email">
                                    <MyLabel htmlFor="email" className='applic_form_label'>Ваш e-mail</MyLabel>
                                    <MyInput placeholder='Ваш e-mail' type='email' className='applic_form_input' id='email' />
                                </div>
                            </div>
                            <div className="applic_items_form_city_adress">
                                <div className="applic_items_form_city">
                                    <MyLabel htmlFor="city" className='applic_form_label' >Город</MyLabel>
                                    <MyInput placeholder='Ваш город' type='text' className='applic_form_input' id='city' />
                                </div>
                                <div className="applic_items_form_adress">
                                    <MyLabel htmlFor="adress" className='applic_form_label'>Адрес</MyLabel>
                                    <MyInput placeholder='Ваш адрес' type="text" className='applic_form_input' id='adress' />
                                </div>
                            </div>
                            <div className="applic_items_form_info">
                                <a onClick={() => setCheckbox(!checkbox)} className="applic_items_form_checkbox">
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill={checkbox ? "#020F59" : "#fff"} d="M13.2881 0.0769196L5.67265 7.42816L2.71238 4.57084L0.384766 6.81817L5.6727 11.9231L15.6155 2.32429L13.2881 0.0769196Z" />
                                    </svg>
                                </a>
                                <div>Даю согласие <a href="">на обработку персональных данных</a></div>
                            </div>
                            <button onClick={(e) => {
                                e.preventDefault()
                                setSuccess(true)
                            }} className="applic_items_form_call_me">
                                ПЕРЕЗВОНИТЕ МНЕ
                            </button>
                        </form>
                    </div>
                    {/* RECIEVE APPLIC */}
                    <div className={(!success && 'close') + (" recieve_applic")}>
                        <div className="recieve_applic_title">
                            ВАША ЗАЯВКА ПРИНЯТА!
                        </div>
                        <div className="recieve_applic_title_mini">
                            В ближайшее время с вами свяжется оператор для подтверждения заказа.
                        </div>
                        <a onClick={handleClose} className="recieve_applic_back_catalog">
                            ВЕРНУТЬСЯ В КАТАЛОГ
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applic;