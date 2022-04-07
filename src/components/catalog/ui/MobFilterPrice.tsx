import React from 'react';

interface IMobFilterPrice {
    filterPriceActive: boolean;
    setFilterPriceActive: React.Dispatch<React.SetStateAction<boolean>>;
    filterPriceOptions: {
        title: string;
        min: number;
        max: number;
    }[];
    filterPrice: {
        title: string;
        min: number;
        max: number;
    };
    handlePrice: (item: {
        title: string;
        min: number;
        max: number;
    }, filterPrice: {
        title: string;
        min: number;
        max: number;
    }) => void
}

const MobFilterPrice: React.FC<IMobFilterPrice> = (props) => {

    const { filterPriceActive, setFilterPriceActive, filterPriceOptions } = props
    const { filterPrice, handlePrice } = props

    const handleFilterPriceActive = () => setFilterPriceActive(!filterPriceActive)
    const handleSetPrice = (item: typeof filterPrice) => handlePrice(item, filterPrice)

    return (
        <>
            <div onClick={handleFilterPriceActive}
                className={(filterPriceActive && 'active') + (" mob_ctg_filter_header wrapper")}>
                <div className="mob_ctg_filter_header_title">
                    Цена, ₽
                </div>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </div>
            <div className={(filterPriceActive && 'active') + (" mob_ctg_filter_body_items")}>
                {filterPriceOptions.map((item) => (
                    <div
                        key={item.min}
                        className='mob_ctg_filter_body_item'
                        onClick={() => handleSetPrice(item)}
                    >
                        <div className="mob_ctg_filter_body_title_icon wrapper">
                            <div className="filter_body_title">{item.title}</div>
                            <div className="filter_body_icon">
                                <div className={(filterPrice.title === item.title && 'active') + ''}></div></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default MobFilterPrice;