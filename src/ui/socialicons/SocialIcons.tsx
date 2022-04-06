import React from 'react';
import fb from "../../images/FB.svg";
import ins from "../../images/INS.svg";
import tg from "../../images/TG.svg";
import wh from "../../images/WH.svg";
import vk from "../../images/VK.svg";

const SocialIcons:React.FC = () => {
    return (
        <>
            <a href="#" className="social_icon">
                <img src={fb} alt="social_icon" className="social_icon_img" />
            </a>
            <a href="#" className="social_icon">
                <img src={vk} alt="social_icon" className="social_icon_img" />
            </a>
            <a href="#" className="social_icon">
                <img src={wh} alt="social_icon" className="social_icon_img" />
            </a>
            <a href="#" className="social_icon">
                <img src={ins} alt="social_icon" className="social_icon_img" />
            </a>
            <a href="#" className="social_icon">
                <img src={tg} alt="social_icon" className="social_icon_img" />
            </a>
        </>
    );
};

export default SocialIcons;