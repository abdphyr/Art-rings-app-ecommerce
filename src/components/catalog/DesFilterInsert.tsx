import React from 'react';

interface DesFilterInsertProps {
    filterInsertOptions: string[];
    filterInsert: string;
    handleInsert: (item: string, filterInsert: string) => void;
}

const DesFilterInsert: React.FC<DesFilterInsertProps> = (props) => {
    const { filterInsert, filterInsertOptions, handleInsert } = props
    return (
        <div className="des_ctg_tools_filter_insert">
            <div className="des_ctg_tools_filter_title">
                ВСТАВКИ
            </div>
            <div className="des_ctg_tools_filter_insert_items">
                {filterInsertOptions.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleInsert(item, filterInsert)}
                        className={(filterInsert === item && 'active') + (" des_ctg_tools_filter_item")}
                    >{item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesFilterInsert;