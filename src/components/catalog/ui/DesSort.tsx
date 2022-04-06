import React from 'react';
import { SortProps } from '../catalogTypes';

const DesSort: React.FC<SortProps> = (props) => {
    const { viewSrtOpt, setViewSrtOpt } = props
    const { sortOptions, setSort ,sort} = props
    return (
        <div className="des_ctg_tools_sorting">
            <div className="des_sorting_title">
                Сортировать:
            </div>
            <div onClick={() => {
                setViewSrtOpt(!viewSrtOpt)
            }}
                className="des_ctg_tools_sorting_content">
                <div className="des_sorting_item">
                    {sort}{/* Bu yerda sort turi yoziladi */}
                </div>
                <div className={(viewSrtOpt && 'active') + (" des_sorting_icon")}>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                    </svg>
                </div>
                <div className={(viewSrtOpt && 'active') + (" des_sorting_items")}>
                    {sortOptions.map(option => (
                        <div onClick={() => {
                            setSort(option)
                            setViewSrtOpt(!viewSrtOpt)
                        }}
                            key={option} className="des_sorting_item">
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesSort;