import './desctopcatalog.css';
import { useState} from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import LargeProduct from '../product/LargeProduct';
import { CtgPropsType } from './catalogTypes';
import banner from '../../images/desctopVerticalBanner.png'
import Pagination from '../pagination/Pagination';



const DesCatalog = ({...props}:CtgPropsType) => {
    
    const { title, description, location  } = props
    const { products, sortOptions, filterPriceOptions } = props
    const { filterInsertOptions, filterTagOptions } = props 
    const { sort, setSort } = props
    const { filterPrice, handlePrice } = props
    const { filterInsert, handleInsert } = props
    const { filterTags, handleTag } = props 
    const { page, setPage } = props
    const { viewSrtOpt, setViewSrtOpt } = props

    const [animation, setAnimation] = useState(true)
    const [showNumber, setShowNumber] = useState(7)
    const [showing, setShowing] = useState(false)
    const [tagsShowAll, setTagsShowALL] = useState(false)
    

    const limit:CtgPropsType['products'] = []
    Array(showNumber).fill(showNumber).forEach((_, i) => {
        limit.push(products[i])
    })
       
    return (
        <>
            <div className="wrapper">
                <Breadcrumb location={location}/>
                <div className="desctop_catalog_tools">
                    {/* LEFT HAND */}
                    <div className="des_ctg_left_hand">
                        <div className="des_ctg_info">
                            <div className="des_ctg_info_title">
                                {title}
                            </div>
                            <div className="des_ctg_info_description">
                                {description}
                            </div>
                        </div>
                        <div className="des_ctg_tools">
                            {/* SORT SECTION */}
                            <div className="des_ctg_tools_sort">
                                {/* Animation */}
                                <div className="des_ctg_tools_sort_animation">
                                    <div onClick={()=>setAnimation(!animation)} className={(animation&&'active')+(' des_animation_icon')}>
                                        <div></div>
                                    </div>
                                    <div className='des_animation_icon_text'>Анимация</div>
                                </div>
                                {/* Showing product numbers */}
                                <div className="des_ctg_tools_sort_showing">
                                    <div className='des_showing_title'>Показать:</div>
                                    <div onClick={()=>setShowing(!showing)}  className="des_ctg_tools_sort_showing_content">
                                        <div className="des_showing_number">{showNumber}</div>
                                        <div className={(showing&&'active')+(" des_showing_icon")}>
                                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <div className={(showing&&'active')+(" des_showing_numbers")}>
                                            {Array(products.length).fill(products).map((_,i)=>(
                                                <div onClick={()=>{
                                                    setShowNumber(i+1)
                                                    setShowing(!showing)
                                                }} key={i} className="des_showing_number">
                                                    {i+1}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Sorting products */}
                                <div className="des_ctg_tools_sorting">
                                    <div className="des_sorting_title">
                                        Сортировать:
                                    </div>
                                    <div onClick={()=>{
                                            setViewSrtOpt(!viewSrtOpt)}} 
                                            className="des_ctg_tools_sorting_content">
                                        <div className="des_sorting_item">
                                            {sort}{/* Bu yerda sort turi yoziladi */}
                                        </div>
                                        <div className={(viewSrtOpt&&'active')+(" des_sorting_icon")}>
                                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <div className={(viewSrtOpt&&'active')+(" des_sorting_items")}>
                                            {sortOptions.map(option=>(
                                                <div onClick={()=>{
                                                    setSort(option)
                                                    setViewSrtOpt(!viewSrtOpt)
                                                    }} 
                                                    key={option} className="des_sorting_item">
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                            {/* FILTER SECTION */}
                            <div className="des_ctg_tools_filter">
                                {/* Filter price */}
                                <div className="des_ctg_tools_filter_price">
                                    <div className="des_ctg_tools_filter_title">
                                        ЦЕНА
                                    </div>
                                    <div className="des_ctg_tools_filter_price_items">
                                        {filterPriceOptions.map((item)=>(
                                            <div 
                                                key={item.min} 
                                                className={(filterPrice.title===item.title&&'active')+(" des_ctg_tools_filter_item")}
                                                onClick={()=>handlePrice(item,filterPrice)}
                                                >{item.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Filter insert */}
                                <div className="des_ctg_tools_filter_insert">
                                    <div className="des_ctg_tools_filter_title">
                                        ВСТАВКИ
                                    </div>
                                    <div className="des_ctg_tools_filter_insert_items">
                                        {filterInsertOptions.map((item, i)=>(
                                            <div 
                                                key={i}
                                                onClick={()=>handleInsert(item,filterInsert)} 
                                                className={(filterInsert===item&&'active')+(" des_ctg_tools_filter_item")}
                                                >{item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Filter tags */}
                                <div className="des_ctg_tools_filter_tags">
                                    <div className="des_ctg_tools_filter_title">
                                        ТЕГИ  
                                    </div>
                                    <div className="des_ctg_tools_filter_tags_items">
                                        {filterTagOptions?.map((tag, i)=>(
                                            <div 
                                                key={i}
                                                onClick={()=>handleTag(tag,filterTags)}
                                                className={(filterTags?.includes(tag)&&'active')+(" des_ctg_tools_filter_item")}>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Filter tags all */}
                                    <div className="des_ctg_tools_filter_tags_show_all">
                                        <div onClick={()=>setTagsShowALL(!tagsShowAll)} className="title_icon">показать все
                                            <span className={(tagsShowAll&&'active')+(' icon')}>
                                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                                            </svg></span>
                                        </div>
                                        <div className={(tagsShowAll&&'active')+(" des_ctg_tools_filter_tags_items")}>
                                            {filterTagOptions?.map((tag, i)=>(
                                                <div 
                                                    key={i}
                                                    onClick={()=>handleTag(tag,filterTags)}
                                                    className={(filterTags?.includes(tag)&&'active')+(" des_ctg_tools_filter_item")}>
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT HAND */}
                    <div className="des_ctg_right_hand">
                        <div className="des_ctg_banner">
                            <img src={banner} alt="" className="des_ctg_banner_image" />
                        </div>
                    </div>
                </div>
                {/* Catalog products */}
                <div className="desctop_catalog_products">
                    {products.map(product=>(
                        <div key={product.id} className="desctop_catalog_product">
                            <LargeProduct animation={animation} product={product} path={`${location.pathname}/`} />
                        </div>
                    ))}
                </div>
                <div className="desctop_catalog_products_pagination">
                    <div className="des_ctg_prs_pg_line"></div>
                    <Pagination page={page} setPage={setPage} length={products.length} />
                </div>
                <div className="catalog_info">
                    Дизайнерские обручальные кольца от производителя хороши тем, что их внешний вид и особенности оформления разнообразны и можно 
                    легко подобрать те, которые подойдут именно Вам и Вашей второй половинке. В разделе представлено свыше двухсот готовых моделей 
                    обручальных колец — возможно, Вы захотите внести в некоторые из них свои небольшие дополнения или вовсе заказать неповторимую 
                    модель: мы создадим <a href='#' className="catalog_info_link">уникальный дизайн</a> по Вашему описанию или рисунку, воплотив любые идеи.Можно выбрать любой вид поверхности: 
                    глянцевую или матовую, текстурированную, узорчатую… Выполним резные обручальные кольца или с любой гравировкой. Кольца можно 
                    дополнить драгоценными камнями, например, бриллиантами — такие парные кольца смотрятся роскошно и эффектно. Всем покупателям 
                    колец с фирменной эмблемой Art-Rings мы дарим <a href="#" className="catalog_info_link">бриллиант в подарок</a>.<br />
                    Парные обручальные кольца от «Арт-Рингз» можно недорого <a href="#" className="catalog_info_link">купить в Москве</a> или с 
                    удобной <a href="#" className="catalog_info_link">доставкой в регионы.</a> С радостью ответим на Ваши вопросы по телефонам: +7 (499) 940-87-77.
                </div>
            </div>
        </>
    );
};

export default DesCatalog;