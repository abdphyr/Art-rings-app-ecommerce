import React, { useState, useEffect } from 'react';
import star from '../../../images/star1.svg';
import prevstrelka from '../../../images/prevstrelka.svg';
import nextstrelka from '../../../images/nextstrelka.svg';
import inputFile from '../../../images/inputFile.svg';
import Rating from './Rating';

interface DesRevProps {
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

const DesReviewDesc: React.FC<DesRevProps> = (props) => {
    const { reviews, givenRating, handleRating } = props
    const [dr, setDr] = useState(true);//description and reviews
    const [crPage, setCrPage] = useState(1)//carousel page

    const [userWidth, setUserWidth] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setUserWidth(document.body.clientWidth)
        }
        window.addEventListener('resize', handleScroll)
        return () => window.removeEventListener('resize', handleScroll)
    }, [])

    const carouselStyle: React.CSSProperties = {
        width: `${(reviews.length * 100) / (userWidth < 1400 ? 1 : 2)}%`,
        transform: `translateX(-${(crPage - 1) * (100 / reviews.length)}%)`,
        transition: 'all 0.3s ease',
    }
    return (
        <div className="des_pr_dt_description_reviews"> {/*DESCRIPTION AND REVIEWS */}
            <div className="des_pr_dt_desc_revi_titles des_pr_dt_des_rev_padding">
                <div onClick={() => setDr(true)}
                    className={(dr && 'active') + (' title')}>
                    ОПИСАНИЕ
                </div>
                <div onClick={() => setDr(false)}
                    className={(!dr && 'active') + (' title')}>
                    ОТЗЫВЫ ({reviews.length})
                </div>
            </div>
            <div className="des_pr_dt_desc_revi_items">
                <div className="des_pr_dt_desc_revi_body ">
                    <div className={(dr && 'active') + (" des_pr_dt_description des_pr_dt_des_rev_padding")}>
                        <div>
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
                    </div>
                    <div className={(!dr && 'active') + (" des_pr_dt_reviews des_pr_dt_des_rev_padding")}>
                        <div className="des_pr_dt_reviews_carousel">
                            <div className={(crPage <= 1 && 'disabled') + (' des_pr_dt_rw_cr_icon_prev')}
                                onClick={() => crPage > 1 && setCrPage(crPage - 1)}>
                                <img src={prevstrelka} alt="prev" />
                            </div>
                            <div className="des_pr_dt_revi_cr_body">
                                <div style={carouselStyle} className="des_pr_dt_revi_cr_items">
                                    {reviews.map((rev, i) => (
                                        <div key={i} className='des_pr_dt_revi_cr_item'>
                                            <div className="des_pr_dt_revi_cr_element">
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={(crPage >= reviews.length && 'disabled') + (' des_pr_dt_rw_cr_icon_next')}
                                onClick={() => crPage < reviews.length && setCrPage(crPage + 1)}>
                                <img src={nextstrelka} alt="prev" />
                            </div>
                        </div>
                        <form className="des_pr_dt_reviews_form">
                            <div className="des_pr_dt_reviews_form_name_file">
                                <div className="des_pr_dt_name_input">
                                    <label htmlFor="des_pr_dt_name_input">Ваше имя</label>
                                    <input type="text" id='des_pr_dt_name_input' />
                                </div>
                                <div className="des_pr_dt_file_input">
                                    <label htmlFor="des_pr_dt_file_input">
                                        <img src={inputFile} alt="ЗАГРУЗИТЬ ФОТО" />
                                        <div>ЗАГРУЗИТЬ ФОТО</div>
                                    </label>
                                    <input style={{ display: 'none' }} type="file" id='des_pr_dt_file_input' />
                                </div>
                            </div>
                            <div className="des_pr_dt_text_input">
                                <label htmlFor="des_pr_dt_text_input">
                                    Ваш отзыв
                                </label>
                                <textarea style={{ resize: 'none' }} name="" id="des_pr_dt_text_input"></textarea>
                            </div>
                            <div className="des_pr_dt_rating_submit">
                                <div className="des_pr_dt_rating">
                                    <div className="des_pr_dt_rating_title">
                                        Ваша оценка
                                    </div>
                                    <div className="des_pr_dt_rating_icons">
                                        <Rating handleRating={handleRating} givenRating={givenRating} />
                                    </div>
                                </div>
                                <button className="des_pr_dt_submit">
                                    ОСТАВИТЬ ОТЗЫВ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesReviewDesc;