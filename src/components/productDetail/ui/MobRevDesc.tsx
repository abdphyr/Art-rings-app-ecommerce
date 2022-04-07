import React, { useState } from 'react';
import star from '../../../images/star1.svg';
import postImage from '../../../images/postImage.svg';
import Rating from './Rating';

interface IMobRev {
    reviews: {
        title: string;
        rating: number;
        description: string;
        date: string;
        img: string[];
    }[];
    givenRating: number;
    handleRating: (rating: number) => void;
}

const MobRevDesc: React.FC<IMobRev> = (props) => {
    const { reviews, givenRating, handleRating } = props
    const [showReview, setShowReview] = useState(false)
    const limitReview = showReview ? reviews : [reviews[0], reviews[1]]
    return (
        <>
            <div className='mob_pr_dt_description'>
                <div>ОПИСАНИЕ</div>
                <p>Прекрасные обручальные кольца с инкрустацией дорожками бриллиантов в женском кольце.</p>
                <p>Это замечательный образец современной классики. Бриллианты в кольце расположены под
                    углом к шинке. Камни при столь необычном расположении сияют по-особенному.
                    Их блеск заметен лучше всего когда рука находится в движении.
                </p>
                <p>Мужское кольцо без инкрустации, оно более строгое. Скосы шинки имеют другую, матированную,
                    фактуру. В целом дизайн этих парных колец очень изысканный и современный.
                </p>
                <p>Такие кольца обязательно понравятся тем, кто ищет что-то классическое и в то же время особенное, не такое, как у всех!</p>
            </div>
            <div className="mob_pr_dt_reviews">
                <div className="mob_pr_dt_reviews_title">
                    ОТЗЫВЫ ({reviews.length})
                </div>
                {limitReview.map((rev, i) => (
                    <div key={i} className='mob_pr_dt_reviews_item'>
                        <div className="title">{rev.title}</div>
                        <div className="rating">
                            {Array(rev.rating).fill(rev.rating).map((_, i) => (
                                <img key={i} src={star} alt="star" />
                            ))}
                        </div>
                        <div className="desctiption">
                            {rev.description}
                        </div>
                        <div className="images">
                            {rev.img.map((image, i) => (
                                <img key={i} src={image} alt="carouselimage" />
                            ))}
                        </div>
                        <div className="date">
                            {rev.date}
                        </div>
                    </div>
                ))}
                <button onClick={() => setShowReview(!showReview)} className="mob_pr_dt_reviews_show_more">
                    ПОКАЗАТЬ ЕЩЁ
                    <span className={(showReview && 'active') + (" mob_pr_dt_reviews_show_more_icon")}>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                        </svg>
                    </span>
                </button>
            </div>
            <form className="mob_pr_dt_reviews_form">
                <div className="mob_pr_dt_reviews_form_title">
                    НАПИСАТЬ ОТЗЫВ
                </div>
                <div className="mob_pr_dt_name_input">
                    <input type="text" placeholder='Ваше имя' />
                </div>
                <div className="mob_pr_dt_text_input">
                    <textarea placeholder='Ваш отзыв' style={{ resize: 'none' }} name="" id="mob_pr_dt_text_input"></textarea>
                </div>
                <div className="mob_pr_dt_rating_file">
                    <div className="mob_pr_dt_rating">
                        <div className="mob_pr_dt_rating_title">
                            Ваша оценка
                        </div>
                        <div className="mob_pr_dt_rating_icons">
                            <Rating handleRating={handleRating} givenRating={givenRating} />
                        </div>
                    </div>
                    <div className="mob_pr_dt_file_input">
                        <label htmlFor="mob_pr_dt_file_input">
                            <img src={postImage} alt="ЗАГРУЗИТЬ ФОТО" />
                        </label>
                        <input style={{ display: 'none' }} type="file" id='mob_pr_dt_file_input' />
                    </div>
                </div>
                <button className="mob_pr_dt_submit">
                    ОСТАВИТЬ ОТЗЫВ
                </button>
            </form>
        </>
    );
};

export default MobRevDesc;