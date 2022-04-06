import './desctopcatalog.css';
import React, { useState } from 'react';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import LargeProduct from '../../ui/product/LargeProduct';
import { CtgPropsType } from './catalogTypes';
import banner from '../../images/desctopVerticalBanner.png'
import Pagination from '../../ui/pagination/Pagination';
import ShowProduct from './ui/ShowProduct';
import DesSort from './ui/DesSort';
import Animation from './ui/Animation';
import DesFilterPrice from './ui/DesFilterPrice';
import DesFilterInsert from './ui/DesFilterInsert';
import DesFilterTag from './ui//DesFilterTag';
import CatalogInfo from './ui/CatalogInfo';

const DesCatalog:React.FC<CtgPropsType> = (props) => {

    const { title, description, location } = props
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

    const limit: CtgPropsType['products'] = []
    Array(showNumber).fill(showNumber).forEach((_, i) => {
        limit.push(products[i])
    })
    const productsLength = products.length
    const showProductProps = {
        showing,setShowing,
        showNumber,setShowNumber,
        productsLength
    }
    const desSortProps = {
        viewSrtOpt, setViewSrtOpt,
        sortOptions, setSort ,sort
    }
    const desFilterPriceProps= {
        filterPrice, handlePrice,filterPriceOptions
    }
    const desFilterInsertProps = {
        filterInsertOptions,filterInsert,handleInsert
    }
    const desFilterTagProps = {
        filterTagOptions,filterTags,handleTag,
        tagsShowAll,setTagsShowALL
    }
    return (
        <>
            <div className="wrapper">
                <Breadcrumb location={location} />
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
                                <Animation animation={animation} setAnimation={setAnimation} />
                                <ShowProduct {...showProductProps}/>
                                <DesSort {...desSortProps}/>
                            </div>
                            {/* FILTER SECTION */}
                            <div className="des_ctg_tools_filter">
                                <DesFilterPrice {...desFilterPriceProps} />
                                <DesFilterInsert {...desFilterInsertProps} />
                                <DesFilterTag {...desFilterTagProps} />
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
                    {products.map(product => (
                        <div key={product.id} className="desctop_catalog_product">
                            <LargeProduct animation={animation} product={product} path={`${location.pathname}/`} />
                        </div>
                    ))}
                </div>
                <div className="desctop_catalog_products_pagination">
                    <div className="des_ctg_prs_pg_line"></div>
                    <Pagination page={page} setPage={setPage} length={products.length} />
                </div>
                <CatalogInfo />
            </div>
        </>
    );
};

export default DesCatalog;