import React from 'react';
import fb from "../../images/FB.svg";
import ins from "../../images/INS.svg";
import tg from "../../images/TG.svg";
import wh from "../../images/WH.svg";
import vk from "../../images/VK.svg";

const FooterSocialIcons: React.FC = () => {
    return (
        <>
            <a href="#" className="footer_social_icon">
                <img
                    src={fb}
                    alt="footer_social_icon"
                    className="footer_social_icon_img"
                />
            </a>
            <a href="#" className="footer_social_icon">
                <img
                    src={vk}
                    alt="footer_social_icon"
                    className="footer_social_icon_img"
                />
            </a>
            <a href="#" className="footer_social_icon">
                <img
                    src={wh}
                    alt="footer_social_icon"
                    className="footer_social_icon_img"
                />
            </a>
            <a href="#" className="footer_social_icon">
                <img
                    src={ins}
                    alt="footer_social_icon"
                    className="footer_social_icon_img"
                />
            </a>
            <a href="#" className="footer_social_icon">
                <img
                    src={tg}
                    alt="footer_social_icon"
                    className="footer_social_icon_img"
                />
            </a>
        </>
    );
};

export default FooterSocialIcons;