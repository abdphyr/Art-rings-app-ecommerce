import React, { useState, useEffect } from 'react';
import './desproductdetail.css';
import { ProductDetailTypes } from './productDetailTypes';
import desctopVerticalBanner from '../../images/desctopVerticalBanner.png';
import star from '../../images/star1.svg';
import productdetaildeg from '../../images/productdetaildeg.svg'
import pr_dt_bottom from '../../images/pr_dt_bottom.svg'
import pr_dt_top from '../../images/pr_dt_top.svg'
import brand from '../../images/mainlogo.png';
import prevstrelka from '../../images/prevstrelka.svg';
import nextstrelka from '../../images/nextstrelka.svg';
import inputFile from '../../images/inputFile.svg';
import ProductCarousel from '../../ui/carousel/ProductCarousel';
import Rating from './Rating';
import DesDetTopInfo from './ui/DesDetTopInfo';
import Actions from './ui/Actions';


const DesProductDetail:React.FC<ProductDetailTypes> = (props) => {
    const { product, recentlyProducts, sizes, isFavourite } = props;
    const { maleSize, setMaleSize, femaleSize, setFemaleSize } = props;
    const { flActive, setFlActive, mlActive, setMlActive } = props;
    const { givenRating, handleRating } = props;

    const { id, date, rating, price, images, reviews, discount, model } = product

    const [userWidth, setUserWidth] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setUserWidth(document.body.clientWidth)
        }
        window.addEventListener('resize', handleScroll)
        return () => window.removeEventListener('resize', handleScroll)
    }, [])

    const [pg, setPg] = useState(0)//selected images page
    const [selectImg, setSelectImg] = useState(images[0])//selected image
    const [dr, setDr] = useState(true);//description and reviews
    const [crPage, setCrPage] = useState(1)//carousel page

    const imagesStyle: React.CSSProperties = {
        height: `${images.length * 100}px`,
        transform: `translateY(-${pg * 100}px)`,
        transition: 'all 0.3s ease',
    }

    const carouselStyle: React.CSSProperties = {
        width: `${(reviews.length * 100) / (userWidth < 1400 ? 1 : 2)}%`,
        transform: `translateX(-${(crPage - 1) * (100 / reviews.length)}%)`,
        transition: 'all 0.3s ease',
    }

    return (
        <>
            <DesDetTopInfo date={date} rating={rating} isFavourite={isFavourite} length={reviews.length} />
            <div className="des_pr_dt_info">
                <div className="des_pr_dt_info_left">{/*LEFT */}
                    <div className="des_pr_dt_info_images">{/*IMAGES SECTION*/}
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
                </div>
                <div className="des_pr_dt_info_right"> {/*RIGTH  */}
                    <Actions {...props}/>
                    <div className="des_pr_dt_banner">
                        <img src={desctopVerticalBanner} alt="image" />
                    </div>
                </div>
            </div>
            <div className="des_pr_dt_recently_viewed">
                <div className="des_pr_dt_recently_viewed_title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </div>
                <div className="des_pr_dt_recently_viewed_products">
                    <ProductCarousel recently={recentlyProducts} />
                </div>
            </div>
        </>
    );
};

export default DesProductDetail;