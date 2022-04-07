import './mobilecatalog.css';
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import SmallProduct from '../../ui/product/SmallProduct';
import { ICatalog } from './catalogTypes';
import mobileBanner from '../../images/mobileBanner.png';
import Pagination from '../../ui/pagination/Pagination';
import MobFilter from './ui/MobFilter';
import MobSort from './ui/MobSort';
import CatalogInfo from './ui/CatalogInfo';
import MobFilterButton from './ui/MobFilterButton';
import MobSortButton from './ui/MobSortButton';

const MobCatalog: React.FC<ICatalog> = (props) => {

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

    const mobSortProps = {
        viewSrtOpt, setViewSrtOpt,
        sortOptions, setSort, sort
    }

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
                    <MobSortButton viewSrtOpt={viewSrtOpt} setViewSrtOpt={setViewSrtOpt} >
                        {sort}
                    </MobSortButton>
                    <MobFilterButton setFilterPage={setFilterPage}>
                        Фильтры
                    </MobFilterButton>
                </div>
                <MobSort {...mobSortProps} />
                <div className="mob_ctg_banner">
                    <img src={mobileBanner} alt="mobilebanner" className="des_ctg_banner_image" />
                </div>
                <div className="mobile_catalog_products">
                    {products.map(product => (
                        <div key={product.id} className="mobile_catalog_product">
                            <SmallProduct product={product} path={`${location.pathname}/`} />
                        </div>
                    ))}
                </div>
                <div className="mobile_catalog_products_pagination">
                    <Pagination page={page} setPage={setPage} length={products.length} />
                </div>
                <CatalogInfo />
            </div>
        </>
    );
};

export default MobCatalog;