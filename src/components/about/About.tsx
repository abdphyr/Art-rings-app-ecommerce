import React, { useEffect } from 'react';
import './about.css';
import map from "../../images/map-pin.svg";
import mail from "../../images/mail.svg";
import clock from "../../images/clock.svg";
import phone from "../../images/phone.svg";
import SocialIcons from '../../ui/socialicons/SocialIcons';


const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='wrapper'>
            <div className="about_title">
                О НАС
            </div>
            <div className="about_body">
                <div className="about_left">
                    <p>Мы - московская студия Art-Rings. Мы знаем, что обручальные
                        кольца должны быть неповторимы, как ваша история любви.</p>
                    <p>Здесь вам помогут выбрать или создать по-настоящему
                        эксклюзивные обручальные кольца.</p>
                    <p>Мы работаем только с проверенными и надёжными поставщиками
                        бриллиантов, поэтому гарантируем, что во вставках - самые лучшие камни.</p>
                    <p>Все обручальные и помолвочные кольца изготовляются вручную, в
                        строгом соответствии с высочайшими ювелирными стандартами.</p>
                    <p>В каждое кольцо мы вкладываем не только мастерство, но и
                        частичку души, поэтому они особенные.</p>
                    <p>Кольца Art-Rings никогда не были и не будут массовыми.</p>
                    <p>Один из самых волнующих моментов при подготовке к
                        свадьбе - это выбор обручальных колец. С Art-Rings вы
                        можете быть спокойны за исключительное качество и сроки
                        исполнения вашего заказа, получая удовольствие от выбора и
                        ожидания самого счастливого дня вашей жизни.  </p>
                    <p>С Аrt-Rings у вас будут обручальные кольца мечты!</p>
                </div>
                <div className="about_right">
                    <div className="about_contact_info">
                        <div className="about_contact_items">
                            <div className="about_contact_info_title">
                                КОНТАКТЫ
                            </div>
                            <div className="contact_adress">
                                <div className="contact_icon">
                                    <img src={map} alt="rasm" />
                                </div>
                                <div className="contact_title">
                                    Москва, Большой Кисловский переулок, 5-7с1
                                </div>
                            </div>
                            <div className="contact_email">
                                <div className="contact_icon">
                                    <img src={mail} alt="rasm" />
                                </div>
                                <div className="contact_title">info@art-rings.ru</div>
                            </div>
                            <div className="contact_work_time">
                                <div className="contact_icon">
                                    <img src={clock} alt="rasm" />
                                </div>
                                <div>
                                    <div className="contact_title">пн-пт 11:00-20:00</div>
                                    <div className="contact_title">сб, вс 11:00-17:00</div>
                                </div>
                            </div>
                            <div className="contact_phone_number">
                                <div className="contact_icon">
                                    <img src={phone} alt="rasm" />
                                </div>
                                <div>
                                    <div className="contact_title">+7 (499) 940-87-77</div>
                                    <div className="contact_title">+7 (977) 841-23-40</div>
                                </div>
                            </div>
                            <div className="contact_social_icons">
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;