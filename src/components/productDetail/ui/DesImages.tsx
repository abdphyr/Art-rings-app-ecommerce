import React, { useState } from 'react';
import productdetaildeg from '../../../images/productdetaildeg.svg'
import pr_dt_bottom from '../../../images/pr_dt_bottom.svg'
import pr_dt_top from '../../../images/pr_dt_top.svg'
import brand from '../../../images/mainlogo.png';

interface DesImagesProps {
    images: {
        id: number;
        image: string;
    }[]
}

const DesImages: React.FC<DesImagesProps> = ({ images }) => {
    const [selectImg, setSelectImg] = useState(images[0])
    const [pg, setPg] = useState(0)
    const imagesStyle: React.CSSProperties = {
        height: `${images.length * 100}px`,
        transform: `translateY(-${pg * 100}px)`,
        transition: 'all 0.3s ease',
    }
    return (
        <div className="des_pr_dt_info_images">
            <div className="des_pr_dt_info_view">
                <div className="des_pr_dt_info_view_wrapper">
                    <div className={(!(pg > 0) && 'disallow') + (" des_pr_dt_info_view_prev")}>
                        <img onClick={() => pg > 0 && setPg(pg - 1)} src={pr_dt_top} alt="buton" />
                    </div>
                    <div className="des_pr_dt_info_view_deg">
                        <img src={productdetaildeg} alt="deg" />
                    </div>
                    <div className="des_pr_dt_info_view_body">
                        <div style={imagesStyle} className="des_pr_dt_info_view_items">
                            {images.map(image => (
                                <div key={image.id}
                                    onClick={() => setSelectImg(image)}
                                    className={(selectImg.id === image.id && 'active') + (" des_pr_dt_info_view_item")}>
                                    <img src={image.image} alt="aaok" />
                                    <div>
                                        <img src={brand} alt="brand" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={(!(pg < (images.length - 4)) && 'disallow') + (" des_pr_dt_info_view_next")} >
                        <img onClick={() => pg < (images.length - 4) && setPg(pg + 1)} src={pr_dt_bottom} alt="button" />
                    </div>
                </div>
            </div>
            <div className="des_pr_dt_info_image">
                <img src={selectImg.image} alt="image" />
                <div>
                    <img src={brand} alt="brand" />
                </div>
            </div>
        </div>
    );
};

export default DesImages;