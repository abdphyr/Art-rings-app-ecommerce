import React from 'react';

interface IDesFilterInsert {
    filterInsertOptions: string[];
    filterInsert: string;
    handleInsert: (item: string, filterInsert: string) => void;
}

const DesFilterInsert: React.FC<IDesFilterInsert> = (props) => {

    const { filterInsert, filterInsertOptions, handleInsert } = props
    const handleSetInsert = (item: typeof filterInsert) => handleInsert(item, filterInsert);

    return (
        <div className="des_ctg_tools_filter_insert">
            <div className="des_ctg_tools_filter_title">
                ВСТАВКИ
            </div>
            <div className="des_ctg_tools_filter_insert_items">
                {filterInsertOptions.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleSetInsert(item)}
                        className={(filterInsert === item && 'active') + (" des_ctg_tools_filter_item")}
                    >{item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesFilterInsert;