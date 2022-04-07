import React, { useState, useEffect, useRef } from "react";
import './contact.css';
import map from "../../images/map-pin.svg";
import mail from "../../images/mail.svg";
import clock from "../../images/clock.svg";
import phone from "../../images/phone.svg";
import contact1 from '../../images/contact1.png';
import contact2 from '../../images/contact2.png';
import contact3 from '../../images/contact3.png';
import imagecontact from '../../images/imagecontact.png';
import SocialIcons from "../../ui/socialicons/SocialIcons";

const Contact: React.FC = () => {

    const [trf, setTrf] = useState<number>(1)
    const intervalRef = useRef<number | null>(null)

    const carouselItems = [
        { id: 1, img: contact1 },
        { id: 2, img: contact2 },
        { id: 3, img: contact3 },
        { id: 4, img: contact1 },
        { id: 5, img: contact2 },
        { id: 6, img: contact3 },
        { id: 7, img: contact1 },
        { id: 8, img: contact2 },
    ]

    const stopTrf = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            if (trf < carouselItems.length) {
                setTrf(trf + 1)
            } else {
                setTrf(1)
            }
        }, 2000)
        return () => {
            stopTrf()
        }
    }, [trf])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const contactCarouselItems: React.CSSProperties = {
        transition: "all 0.5s ease",
        width: `${100 * carouselItems.length}%`,
        transform: `translateX(-${(trf - 2) * (50 / carouselItems.length)}%`,
    }

    const contactCarouselItem: React.CSSProperties = {
        width: `${50}%`,
    }

    return (
        <div className='wrapper'>
            <div className="contact_title_desc">
                <div className="contact_title">
                    КОНТАКТЫ
                </div>
                <div className="contact_desc">
                    Наша студия переехала с ул. Никольской на Арбат.
                    Теперь у нас ещё просторнее, уютнее и больше красивых колечек!
                </div>
            </div>
            <div className="contact_body">
                <div className="contact_info">
                    <div className="contact_items">
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
                <div className="contact_image">
                    <img src={imagecontact} alt="contact_image" />
                </div>
            </div>
            <div className="contact_carousel">
                <div style={contactCarouselItems}>
                    <div style={contactCarouselItem}>
                        {carouselItems.map((img, i) => (
                            <div className="contact_carousel_item">
                                <img key={i} src={img.img} alt="rasm" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;