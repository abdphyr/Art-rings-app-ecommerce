import React from 'react';
import heart from '../../../images/heart.svg';
import star from '../../../images/star1.svg';

interface IInfo {
    date: string;
    rating: number;
    isFavourite: boolean;
    length: number;
}

const DesDetTopInfo:React.FC<IInfo> = (props) => {
    const { date,rating,isFavourite,length} =props
    return (
        <div className="des_pr_dt_top_info">
            <div className="des_pr_dt_date">{date}</div>
            <div className="des_pr_dt_rate">
                {Array(rating).fill(rating).map((_, i) => (
                    <img key={i} src={star} alt="rasm" />
                ))}
            </div>
            <div className="des_pr_dt_review_title">
                {length} отзыв
            </div>
            {isFavourite && <div className='des_in_favorites'>
                <img src={heart} alt="aa" /> в избранное
            </div>}
        </div>
    );
};

export default DesDetTopInfo;