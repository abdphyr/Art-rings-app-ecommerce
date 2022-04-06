import React from 'react';
import fb from "../../images/FB.svg";
import ins from "../../images/INS.svg";
import tg from "../../images/TG.svg";
import wh from "../../images/WH.svg";
import vk from "../../images/VK.svg";

const MobSocialIcons:React.FC = () => {
    return (
        <>
            <a href="#" className="mob_social_icon">
                <img src={fb} alt="mob_social_icon" className="mob_social_icon_img" />
            </a>
            <a href="#" className="mob_social_icon">
                <img src={vk} alt="mob_social_icon" className="mob_social_icon_img" />
            </a>
            <a href="#" className="mob_social_icon">
                <img src={wh} alt="mob_social_icon" className="mob_social_icon_img" />
            </a>
            <a href="#" className="mob_social_icon">
                <img src={ins} alt="mob_social_icon" className="mob_social_icon_img" />
            </a>
            <a href="#" className="mob_social_icon">
                <img src={tg} alt="mob_social_icon" className="mob_social_icon_img" />
            </a>
        </>
    );
};

export default MobSocialIcons;