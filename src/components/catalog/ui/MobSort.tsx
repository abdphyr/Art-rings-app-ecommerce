import React from 'react';
import { SortProps } from '../catalogTypes';

const MobSort: React.FC<SortProps> = (props) => {
    const { viewSrtOpt, setViewSrtOpt } = props
    const { sortOptions, setSort } = props

    return (
        <div className="mob_ctg_sort_body">
            <div className={(viewSrtOpt && 'active') + (" mob_ctg_sort_items")}>
                {sortOptions.map(option => (
                    <div onClick={() => {
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
    );
};

export default MobSort;