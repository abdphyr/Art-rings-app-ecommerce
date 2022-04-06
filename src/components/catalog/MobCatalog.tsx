import './mobilecatalog.css';
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import SmallProduct from '../product/SmallProduct';
import { CtgPropsType } from './catalogTypes';
import mobileBanner from '../../images/mobileBanner.png';
import mobSortIcon from '../../images/mobileSortIcon.svg';
import filterIcon from '../../images/filter.svg';
import Pagination from '../pagination/Pagination';
import MobFilter from './MobFilter';
import MobSort from './MobSort';


const MobCatalog: React.FC<CtgPropsType> = (props) => {

    const { title, description, location } = props
    const { products, sortOptions } = props
    const { sort, setSort } = props
    const { page, setPage } = props
    const { viewSrtOpt, setViewSrtOpt } = props

    const [filterPage, setFilterPage] = useState(false)


    useEffect(() => {
        filterPage ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'unset'
    }, [filterPage]);

    useEffect(() => {
        const handleResize = () => {
            if (document.body.clientWidth > 576) {
                setFilterPage(false)
                document.body.style.overflow = 'unset'
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <div className={(filterPage && 'active') + (" mob_ctg_filter_section")}>
                <MobFilter utils={props} setFilterPage={setFilterPage} />
            </div>
            <div className="wrapper">
                <Breadcrumb location={location} />
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
                    <div onClick={() => {
                        setViewSrtOpt(!viewSrtOpt)
                    }}
                        className={(viewSrtOpt && 'active') + (" mob_ctg_sort_btn")}>
                        <img src={mobSortIcon} alt="mobileImage" />
                        <div className="mob_ctg_sort_title">
                            {sort}
                        </div>
                        <div className={(viewSrtOpt && 'active') + (" des_sorting_icon")}>
                            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    {/* filter button */}
                    <div onClick={() => setFilterPage(true)} className="mob_ctg_filter_btn">
                        <img src={filterIcon} alt="" />
                        <div className="mob_ctg_sort_title">
                            Фильтры
                        </div>
                    </div>
                </div>
                {/* sort body */}
                <MobSort viewSrtOpt={viewSrtOpt} setViewSrtOpt={setViewSrtOpt} sortOptions={sortOptions} setSort={setSort}/>
                {/* Banner */}
                <div className="mob_ctg_banner">
                    <img src={mobileBanner} alt="mobilebanner" className="des_ctg_banner_image" />
                </div>
                {/* Catalog products */}
                <div className="mobile_catalog_products">
                    {products.map(product => (
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