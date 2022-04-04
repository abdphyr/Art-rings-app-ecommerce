import './mobilecatalog.css';
import {useState,useEffect} from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import SmallProduct from '../product/SmallProduct';
import { CtgPropsType } from './catalogTypes';
import mobileBanner from '../../images/mobileBanner.png';
import mobSortIcon from '../../images/mobileSortIcon.svg';
import filterIcon from '../../images/filter.svg';
import closebtnicon from '../../images/closebtnicon.svg';
import filterRadioBtn from '../../images/filterRadioBtn.svg';
import Pagination from '../pagination/Pagination';


const MobCatalog = ({...props}:CtgPropsType) => {

    const { title, description, location } = props
    const { products, sortOptions, filterPriceOptions } = props
    const { filterInsertOptions, filterTagOptions } = props 
    const { sort, setSort } = props
    const { filterPrice, handlePrice, setFilterPrice } = props
    const { filterInsert, handleInsert, setFilterInsert } = props
    const { filterTags, handleTag, setFilterTag } = props 
    const { page, setPage } = props
    const { viewSrtOpt, setViewSrtOpt } = props
    
    const [filterPage, setFilterPage] = useState(false)
    const [filterPriceActive, setFilterPriceActive] = useState(false)
    const [filterInsertActive, setFilterInsertActive] = useState(false)
    const [filterTagsActive, setFilterTagsActive] = useState(false)
    
    useEffect(() => {
        filterPage ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'unset'
    }, [filterPage]); 
    
    useEffect(() => {
        const handleResize = () => {
          if(document.body.clientWidth > 576){
            setFilterPage(false)
            document.body.style.overflow = 'unset'
          }
        }
        window.addEventListener('resize', handleResize)    
        return () => window.removeEventListener('resize', handleResize)
    },[])
    
    const mobFilterSection= (
        <div className='mobile_filter_section'>
            <div>  
            <div className="mob_ctg_filter_top wrapper">
                <div onClick={()=>{
                    setFilterPage(false)
                    setFilterPriceActive(false)
                    setFilterInsertActive(false)
                    setFilterTagsActive(false)
                }} className="mob_ctg_filter_top_icon">
                    <img src={closebtnicon} alt="Close btn icon" />
                </div>
                <div className="mob_ctg_filter_top_title">
                    Фильтры
                </div>
                <div onClick={()=>{
                    setFilterPrice({title:'',min:0,max:0})
                    setFilterInsert('')
                    setFilterTag([])
                    setFilterPage(false)
                    setFilterPriceActive(false)
                    setFilterInsertActive(false)
                    setFilterTagsActive(false)
                }} className="mob_ctg_filter_top_clear">
                    Сбросить
                </div>
            </div>
            <div className="mob_ctg_filter_items">
                <div className="mob_ctg_filter_item">
                    <div onClick={()=>setFilterPriceActive(!filterPriceActive)}
                        className={(filterPriceActive && 'active')+(" mob_ctg_filter_header wrapper")}>
                        <div className="mob_ctg_filter_header_title">
                            Цена, ₽
                        </div>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={(filterPriceActive&&'active')+(" mob_ctg_filter_body_items")}>
                        {filterPriceOptions.map((item)=>(
                            <div 
                                key={item.min} 
                                className='mob_ctg_filter_body_item'
                                onClick={()=>handlePrice(item,filterPrice)}
                                >
                                    <div className="mob_ctg_filter_body_title_icon wrapper">
                                        <div className="filter_body_title">{item.title}</div>
                                        <div className="filter_body_icon">
                                            <div className={(filterPrice.title===item.title && 'active')+''}></div></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="mob_ctg_filter_item">
                    <div onClick={()=>setFilterInsertActive(!filterInsertActive)}
                        className={(filterInsertActive&&'active')+(" mob_ctg_filter_header wrapper")}>
                        <div className="mob_ctg_filter_header_title">
                            Вставки
                        </div>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={(filterInsertActive&&'active')+(" mob_ctg_filter_body_items")}>
                        {filterInsertOptions.map((item)=>(
                            <div 
                                key={item} 
                                className='mob_ctg_filter_body_item'
                                onClick={()=>handleInsert(item,filterInsert)}
                                >
                                    <div className="mob_ctg_filter_body_title_icon wrapper">
                                        <div className="filter_body_title">{item}</div>
                                        <div className="filter_body_icon">
                                            <div className={(filterInsert===item && 'active')+''}></div></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="mob_ctg_filter_item">
                    <div onClick={()=>setFilterTagsActive(!filterTagsActive)}
                        className={(filterTagsActive&&'active')+(" mob_ctg_filter_header wrapper")}>
                        <div className="mob_ctg_filter_header_title">
                            Теги
                        </div>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={(filterTagsActive&&'active')+(" mob_ctg_filter_body_items")}>
                        {filterTagOptions.map((item)=>(
                            <div 
                                key={item} 
                                className='mob_ctg_filter_body_item'
                                onClick={()=>handleTag(item,filterTags)}
                                >
                                    <div className="mob_ctg_filter_body_title_icon wrapper">
                                        <div className="filter_body_title">{item}</div>
                                        <div className={(filterTags?.includes(item) && 'active')+(" filter_body_tag_icon")}>
                                            <img src={filterRadioBtn} alt="kkk" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>  
            </div>
            </div>
            <div className="wrapper">
                <div onClick={()=>{
                    setFilterPage(!filterPage)
                    setFilterPriceActive(false)
                    setFilterInsertActive(false)
                    setFilterTagsActive(false)
                    }}
                    className="filter_show_products">
                    <div>СМОТРЕТЬ ТОВАРЫ</div>
                </div>
            </div>
        </div>
    )
    return (
        <>
            <div className={(filterPage && 'active')+(" mob_ctg_filter_section")}>
                {mobFilterSection}
            </div>
            <div className="wrapper">
                <Breadcrumb location={location}/>
                <div className="mob_ctg_info">
                    <div className="mob_ctg_info_title">
                        {title}
                    </div>
                    <div className="mob_ctg_info_description">
                        {description}
                    </div>
                </div>
                <div className="mob_ctg_sort_filter">
                    {/* sort button */}
                    <div onClick={()=>{
                        setViewSrtOpt(!viewSrtOpt)}} 
                        className={(viewSrtOpt&&'active')+(" mob_ctg_sort_btn")}>
                        <img src={mobSortIcon} alt="mobileImage" />
                        <div className="mob_ctg_sort_title">
                            {sort}
                        </div>
                        <div className={(viewSrtOpt&&'active')+(" des_sorting_icon")}>
                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                    {/* filter button */}
                    <div onClick={()=>setFilterPage(true)} className="mob_ctg_filter_btn">
                        <img src={filterIcon} alt="" />
                        <div className="mob_ctg_sort_title">
                            Фильтры
                        </div>
                    </div>
                </div>
                {/* sort body */}
                <div className="mob_ctg_sort_body">
                    <div className={(viewSrtOpt&&'active')+(" mob_ctg_sort_items")}>
                        {sortOptions.map(option=>(
                            <div onClick={()=>{
                                setSort(option)
                                setViewSrtOpt(!viewSrtOpt)
                                }} 
                                key={option} className="mob_ctg_sort_item">
                                <div className="mob_ctg_sort_item_title">
                                    {option}
                                </div>
                            </div>
                        ))}
                    </div> 
                </div> 
                {/* Banner */}
                <div className="mob_ctg_banner">
                    <img src={mobileBanner} alt="mobilebanner" className="des_ctg_banner_image" />
                </div>
                {/* Catalog products */}
                <div className="mobile_catalog_products">
                    {products.map(product=>(
                        <div key={product.id} className="mobile_catalog_product">
                            <SmallProduct product={product} path={`${location.pathname}/`} />
                        </div>
                    ))}
                </div>
                {/* pagination */}
                <div className="mobile_catalog_products_pagination">
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

export default MobCatalog;