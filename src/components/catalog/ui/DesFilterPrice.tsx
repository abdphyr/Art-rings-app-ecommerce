import React from 'react';

interface DesFilterPriceProps {
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

const DesFilterPrice: React.FC<DesFilterPriceProps> = (props) => {

    const { filterPriceOptions } = props
    const { filterPrice, handlePrice } = props
    const handleSetPrice = (item: typeof filterPrice) => handlePrice(item, filterPrice)

    return (
        <div className="des_ctg_tools_filter_price">
            <div className="des_ctg_tools_filter_title">
                ЦЕНА
            </div>
            <div className="des_ctg_tools_filter_price_items">
                {filterPriceOptions.map((item) => (
                    <div
                        key={item.min}
                        className={(filterPrice.title === item.title && 'active') + (" des_ctg_tools_filter_item")}
                        onClick={() => handleSetPrice(item)}
                    >{item.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesFilterPrice;