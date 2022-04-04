import React,{ useState } from 'react';
import './mobproductdetail.css';
import { ProductDetailTypes } from './productDetailTypes';
import heart from '../../images/heart.svg'
import star from '../../images/star1.svg';
import addCart from '../../images/addCart.svg';
import WH from '../../images/WH.svg';
import checkbox from '../../images/checkbox.svg';
import brand from '../../images/mainlogo.png';
import SmallProduct from '../product/SmallProduct';
import mobileBanner from '../../images/mobileBanner.png';
import postImage from '../../images/postImage.svg';
import { addItemCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';

const MobProductDetail = ({...props}:ProductDetailTypes) => {
    
    const dispatch = useDispatch()

    const { recentlyProducts, product, sizes, isFavourite } = props  
    const { maleSize, setMaleSize, femaleSize, setFemaleSize } = props;
    const { flActive, setFlActive, mlActive, setMlActive } = props;
    const { givenRating, handleRating } = props;
    const { date, rating, price, images, reviews, discount } = product   

    const [imageView, setImageView] = useState(1)/**/

    const [showReview, setShowReview] = useState(false)
    const limitReview = showReview ? reviews : [reviews[0], reviews[1]]

    const [showAllProducts, setShowAllProducts] = useState(false);
    const limitProducts = showAllProducts ? recentlyProducts : recentlyProducts.length > 6 ? Array(6).fill(6).map((_, i) => recentlyProducts[i]) : recentlyProducts

    const imagesBody:React.CSSProperties = {
        width:`${images.length*100}%`, 
        transform:`translateX(-${(imageView - 1)*(100 / images.length)}%)`,
        transition:'all 0.3s ease',
    }

    const imageStyle:React.CSSProperties = {
        width:`${100 / images.length}%`
    }

    return (
        <>
            <div className="mob_pr_dt_top_info">
                <div className="mob_pr_dt_date">{date}</div>
                <div className="mob_pr_info_top_info_row">
                    <div className="mob_pr_dt_top_info_rate_review">
                        <div className="mob_pr_dt_rate">
                            {Array(rating).fill(rating).map((_,i)=>(
                                <img key={i} src={star} alt="rasm" />
                            ))}
                        </div>
                        <div className="mob_pr_dt_review_title">
                            {reviews.length} отзыв
                        </div>
                    </div>
                    {isFavourite && <div className='mob_in_favorites'>
                        <img src={heart} alt="aa" /> в избранное
                    </div>}
                </div>
            </div>
            <div className="mob_pr_dt_info">
                <div className="mob_pr_dt_info_images">{/*IMAGES CAROUSEL */}
                    <div style={imagesBody} className="mob_pr_dt_info_images_body">
                        {images.map(img=>(
                            <div key={img.id} style={imageStyle} className="mob_pr_dt_info_images_item">
                                <img src={img.image} alt="image" />
                                <div className="brand">
                                    <img src={brand} alt="brand" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mob_pr_dt_info_images_btns">
                        {Array(images.length).fill(images.length).map((_,i)=>(
                            <div
                                key={i}
                                onClick={()=>setImageView(i+1)} 
                                className={(imageView===i+1 && 'active')+(' mob_pr_dt_info_images_btn')}>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mob_pr_dt_actions">{/*ACTIONS*/}
                    <div className="mob_pr_dt_price">
                        <div>{discount > 0 ? discount : price} ₽</div>
                        {discount && <span>{price} ₽</span>}
                    </div>
                    <div className="des_pr_dt_sizes">{/*SELECT SIZE*/}
                        <div className="mob_pr_dt_sizes_female">
                            <div className="mob_pr_dt_sizes_title">
                                Размер (жен.)
                            </div>
                            <div className="mob_pr_dt_size" onClick={()=>setFlActive(!flActive)}>
                                <div className={(flActive && 'active')+(" mob_pr_dt_size_btn")}>
                                    <div className={(flActive && 'passive')+(' show_size')}>{femaleSize.title}</div>
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M15 0.766667L8.32308 8L1.53846 0.766667" stroke="black" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className={(flActive && 'active')+(" mob_pr_dt_size_items_wrapper")}>
                                    <div className={(flActive && 'active')+(" mob_pr_dt_size_items")}>
                                        {sizes.map(sizeItem=>(
                                            <div key={sizeItem.size} 
                                                onClick={()=>{
                                                    setFemaleSize(sizeItem)
                                                    setFlActive(false)
                                                }}
                                                className={(femaleSize.size===sizeItem.size && 'active')+(" mob_pr_dt_size_item")}>
                                                {sizeItem.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mob_pr_dt_sizes_male">
                            <div className="mob_pr_dt_sizes_title">
                                Размер (муж.)
                            </div>
                            <div className="mob_pr_dt_size" onClick={()=>setMlActive(!mlActive)}>
                                <div className={(mlActive && 'active')+(" mob_pr_dt_size_btn")}>
                                    <div className={(mlActive && 'passive')+(' show_size')}>{maleSize.title}</div>
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M15 0.766667L8.32308 8L1.53846 0.766667" stroke="black" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className={(mlActive && 'active')+(" mob_pr_dt_size_items_wrapper")}>
                                    <div className={(mlActive && 'active')+(" mob_pr_dt_size_items")}>
                                        {sizes.map(sizeItem=>(
                                            <div key={sizeItem.size} 
                                                onClick={()=>{
                                                    setMaleSize(sizeItem)
                                                    setMlActive(false)
                                                }}
                                                className={(maleSize.size===sizeItem.size && 'active')+(" mob_pr_dt_size_item")}>
                                                {sizeItem.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>{
                            dispatch(addItemCart(product))
                        }} onMouseDown={()=>false} className="mob_pr_dt_cart">
                        <img src={addCart} alt="addCart" />
                        <div>В КОРЗИНУ</div>
                    </button>
                    <div className="mob_pr_dt_write">
                        <img src={WH} alt="addCart" />
                        <div>НАПИСАТЬ WHATSAPP</div>
                    </div>
                    <div className="mob_pr_dt_studio">
                        <div className="example">
                            <img src={checkbox} alt="image" /><span>образцы этой модели представлены в студии</span>
                        </div>
                        <div className="title">- Срок изготовления: 14 календарных дней</div>
                        <div className="title">- Артикул: 987</div>
                        <div className="title">- Материал: <span>Золото 585 пробы</span> <a>(для размеров 16 и 18)</a></div>
                        <div className="title">- Вставки</div>
                        <div className="line"></div>
                    </div>
                    <div className="mob_pr_dt_design">
                        <h6>Внесём любые правки в дизайн:</h6>
                        <div>- ширина, толщина, камни (добавить, убрать, размер, цвет)</div>
                        <div>- цвет колец (одноцветные, двухцветные)</div>
                        <div>- поверхность (глянцевая, матовая, текстурированная и т.д.)</div>
                        <div>- можно без гравировки эмблемы (лебеди)</div>
                        <div>- возможно изготовление в другой пробе и из других  драгоценных металлов</div>
                        <div>- возможно нанести свою гравировку</div>
                    </div>
                </div>
                <div className="mob_pr_dt_banner">
                    <img src={mobileBanner} alt="image" />
                </div>
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
                    {limitReview.map((rev,i)=>(
                        <div key={i} className='mob_pr_dt_reviews_item'>
                            <div className="title">{rev.title}</div>
                            <div className="rating">
                                {Array(rev.rating).fill(rev.rating).map((_,i)=>(
                                    <img key={i} src={star} alt="star" />
                                ))}
                            </div>
                            <div className="desctiption">
                                {rev.description}
                            </div>
                            <div className="images">
                                {rev.img.map((image,i)=>(
                                    <img key={i} src={image} alt="carouselimage" />
                                ))}
                            </div>
                            <div className="date">
                                {rev.date}
                            </div>
                        </div>
                    ))}
                    <button onClick={()=>setShowReview(!showReview)} className="mob_pr_dt_reviews_show_more">
                        ПОКАЗАТЬ ЕЩЁ
                        <span className={(showReview && 'active')+(" mob_pr_dt_reviews_show_more_icon")}>
                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <form className="mob_pr_dt_reviews_form">
                    <div className="mob_pr_dt_reviews_form_title">
                        НАПИСАТЬ ОТЗЫВ
                    </div>
                    <div className="mob_pr_dt_name_input">
                        <input type="text" placeholder='Ваше имя'  />
                    </div>
                    <div className="mob_pr_dt_text_input">
                        <textarea placeholder='Ваш отзыв' style={{resize:'none'}} name="" id="mob_pr_dt_text_input"></textarea>
                    </div>                    
                    <div className="mob_pr_dt_rating_file">
                        <div className="mob_pr_dt_rating">
                            <div className="mob_pr_dt_rating_title">
                                Ваша оценка
                            </div>
                            <div className="mob_pr_dt_rating_icons">
                                <svg onClick={()=> handleRating(1)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke='#9EAFC2' fill={givenRating >=1?'#9EAFC2':'none' } d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
                                </svg>
                                <svg onClick={()=> handleRating(2)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke='#9EAFC2' fill={givenRating>=2?'#9EAFC2':'none' } d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
                                </svg>
                                <svg onClick={()=> handleRating(3)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke='#9EAFC2' fill={givenRating>=3?'#9EAFC2':'none' } d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
                                </svg>
                                <svg onClick={()=> handleRating(4)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke='#9EAFC2' fill={givenRating>=4?'#9EAFC2':'none' } d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
                                </svg>
                                <svg onClick={()=> handleRating(5)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke='#9EAFC2' fill={givenRating>=5?'#9EAFC2':'none' } d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mob_pr_dt_file_input">
                            <label htmlFor="mob_pr_dt_file_input">
                                <img src={postImage} alt="ЗАГРУЗИТЬ ФОТО" />
                            </label>
                            <input style={{display:'none'}} type="file" id='mob_pr_dt_file_input' />
                        </div>
                    </div>
                    <button className="mob_pr_dt_submit">
                        ОСТАВИТЬ ОТЗЫВ
                    </button>
                </form>
            </div>
            <div className="mob_pr_dt_recently_viewed">
                <div className="mob_pr_dt_recently_viewed_title">
                    НЕДАВНО ПРОСМОТРЕННЫЕ
                </div>
                <div className="mob_pr_dt_recently_viewed_products">
                    {limitProducts.map(recentlyProduct=>(
                        <div key={recentlyProduct.product.id} className="mob_pr_dt_recently_viewed_product">
                            <SmallProduct product={recentlyProduct.product} path={recentlyProduct.path} />
                        </div>
                    ))}
                </div>
                <button onClick={()=>setShowAllProducts(!showAllProducts)} className="mob_pr_dt_products_show_more">
                    ПОКАЗАТЬ ЕЩЁ
                    <span className={(showAllProducts && 'active')+(" mob_pr_dt_products_show_more_icon")}>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                        </svg>
                    </span>
                </button>
            </div>
        </>
    );
};

export default MobProductDetail;