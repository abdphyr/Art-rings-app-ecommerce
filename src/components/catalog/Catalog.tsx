import './catalog.css';
import React, { useState, useEffect, useMemo } from 'react';
import DesCatalog from './DesCatalog';
import { useParams, useLocation } from 'react-router-dom';
import MobCatalog from './MobCatalog';
import { GetCatalogDataType } from './catalogTypes';
import { sortFilterData } from '../../utils/sortFilterProducts';
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from '../../services/productsApi';
import Loader from '../../ui/loading/Loading';
import { sortOptions, filterPriceOptions, filterInsertOptions, filterTagOptions, } from './Constants';

const Catalog: React.FC = () => {

    const { category } = useParams()
    const location = useLocation()

    let catalog = '';
    if (category) {
        catalog = category
    }

    const fetchData = useGetProductsQuery(catalog)
    const data: GetCatalogDataType = fetchData.data
    const isLoading: boolean = fetchData.isLoading

    const search = useSelector((state: RootState) => state.search)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [filterPrice, setFilterPrice] = useState<{ title: string, min: number, max: number }>({ title: '', min: 0, max: 0 })
    const [filterInsert, setFilterInsert] = useState('')
    const [filterTags, setFilterTag] = useState<string[]>([])

    const [sort, setSort] = useState<string>('По умолчанию')
    const filter = { byPrice: filterPrice, byInsert: filterInsert, byTags: filterTags }

    const [viewSrtOpt, setViewSrtOpt] = useState(false)
    const [page, setPage] = useState(1)

    const handlePrice = (item: { title: string, min: number, max: number }, filterPrice: { title: string, min: number, max: number }): void => {
        if (item.title === filterPrice.title) {
            setFilterPrice({ title: '', min: 0, max: 0 })
        } else {
            setFilterPrice(item)
        }
    }

    const handleInsert = (item: string, filterInsert: string) => {
        if (item === filterInsert) {
            setFilterInsert('')
        } else {
            setFilterInsert(item)
        }
    }

    const handleTag = (item: string, filterTags: string[]): void => {
        if (filterTags.includes(item)) {
            let newFilterTags = [...filterTags]
            let index = newFilterTags.indexOf(item)
            newFilterTags.splice(index, 1)
            setFilterTag(newFilterTags)
        } else {
            setFilterTag([...filterTags, item])
        }
    }

    const prts = isLoading ? [] : data.products
    const products = useMemo(
        () => sortFilterData(prts, sort, filter, search),
        [sort, filter, search])

    const title = isLoading ? '' : data.title
    const description = isLoading ? '' : data.description

    const catalogProps = {
        products, title, description,
        sortOptions, filterPriceOptions, filterInsertOptions,
        filterTagOptions, location,
        filterPrice, handlePrice, setFilterPrice,
        filterInsert, handleInsert, setFilterInsert,
        filterTags, handleTag, setFilterTag,
        sort, setSort,
        page, setPage,
        viewSrtOpt, setViewSrtOpt
    }

    if (isLoading) return <Loader />

    return (
        <>
            <div className="mobilecatalog">
                <MobCatalog {...catalogProps} />
            </div>
            <div className="desctopcatalog">
                <DesCatalog {...catalogProps} />
            </div>
        </>
    );
};

export default Catalog;