import React from 'react';
import SocialIcons from '../socialicons/SocialIcons';
import map from "../../images/map-pin.svg";
import mail from "../../images/mail.svg";
import clock from "../../images/clock.svg";
import phone from "../../images/phone.svg";

const DesHeaderInfo: React.FC = () => {
    return (
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
    );
};

export default DesHeaderInfo;