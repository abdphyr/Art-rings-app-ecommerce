import React, { useState } from 'react';
import { CtgPropsType } from './catalogTypes';
import closebtnicon from '../../images/closebtnicon.svg';
import MobFilterPrice from './MobFilterPrice';
import MobFilterInsert from './MobFilterInsert';
import MobFilterTag from './MobFilterTag';

interface MobFilterProps {
    utils: CtgPropsType;
    setFilterPage: React.Dispatch<React.SetStateAction<boolean>>;
}


const MobFilter: React.FC<MobFilterProps> = (props) => {

    const { setFilterPage } = props

    const { filterPrice, handlePrice, setFilterPrice } = props.utils
    const { filterInsert, handleInsert, setFilterInsert } = props.utils
    const { filterTags, handleTag, setFilterTag } = props.utils
    const { filterInsertOptions, filterTagOptions, filterPriceOptions } = props.utils

    const [filterPriceActive, setFilterPriceActive] = useState(false)
    const [filterInsertActive, setFilterInsertActive] = useState(false)
    const [filterTagsActive, setFilterTagsActive] = useState(false)


    const handleClose = () => {
        setFilterPage(false)
        setFilterPriceActive(false)
        setFilterInsertActive(false)
        setFilterTagsActive(false)
    }
    const handleReset = () => {
        setFilterPrice({ title: '', min: 0, max: 0 })
        setFilterInsert('')
        setFilterTag([])
        setFilterPage(false)
        setFilterPriceActive(false)
        setFilterInsertActive(false)
        setFilterTagsActive(false)
    }

    const mobFilterPriceProps = {
        filterPriceActive, setFilterPriceActive,
        filterPriceOptions, filterPrice,
        handlePrice
    }

    const mobFilterInsertProps = {
        filterInsertActive, setFilterInsertActive,
        filterInsertOptions, filterInsert, handleInsert
    }

    const mobFilterTagProps = {
        filterTagsActive, setFilterTagsActive,
        filterTagOptions, filterTags, handleTag
    }

    return (
        <div className='mobile_filter_section'>
            <div>
                <div className="mob_ctg_filter_top wrapper">
                    <div onClick={handleClose} className="mob_ctg_filter_top_icon">
                        <img src={closebtnicon} alt="Close btn icon" />
                    </div>
                    <div className="mob_ctg_filter_top_title">
                        Фильтры
                    </div>
                    <div onClick={handleReset} className="mob_ctg_filter_top_clear">
                        Сбросить
                    </div>
                </div>
                <div className="mob_ctg_filter_items">
                    <div className="mob_ctg_filter_item">
                        <MobFilterInsert {...mobFilterInsertProps} />
                    </div>
                    <div className="mob_ctg_filter_item">
                        <MobFilterPrice {...mobFilterPriceProps} />
                    </div>
                    <div className="mob_ctg_filter_item">
                        <MobFilterTag {...mobFilterTagProps} />
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div onClick={handleClose}
                    className="filter_show_products">
                    <div>СМОТРЕТЬ ТОВАРЫ</div>
                </div>
            </div>
        </div>
    );
};

export default MobFilter;