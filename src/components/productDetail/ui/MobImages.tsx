import React, { useState } from 'react';
import brand from '../../../images/mainlogo.png';

interface IMobImages {
    images: {
        id: number;
        image: string;
    }[]
}

const MobImages: React.FC<IMobImages> = ({ images }) => {
    const [imageView, setImageView] = useState(1)/**/
    const imagesBody: React.CSSProperties = {
        width: `${images.length * 100}%`,
        transform: `translateX(-${(imageView - 1) * (100 / images.length)}%)`,
        transition: 'all 0.3s ease',
    }
    const imageStyle: React.CSSProperties = {
        width: `${100 / images.length}%`
    }
    return (
        <div className="mob_pr_dt_info_images">{/*IMAGES CAROUSEL */}
            <div style={imagesBody} className="mob_pr_dt_info_images_body">
                {images.map(img => (
                    <div key={img.id} style={imageStyle} className="mob_pr_dt_info_images_item">
                        <img src={img.image} alt="image" />
                        <div className="brand">
                            <img src={brand} alt="brand" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mob_pr_dt_info_images_btns">
                {Array(images.length).fill(images.length).map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setImageView(i + 1)}
                        className={(imageView === i + 1 && 'active') + (' mob_pr_dt_info_images_btn')}>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobImages;