import React from 'react';
import mobSortIcon from '../../../images/mobileSortIcon.svg';

interface IMobSortButton {
    viewSrtOpt: boolean;
    setViewSrtOpt: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const MobSortButton: React.FC<IMobSortButton> = ({ viewSrtOpt, setViewSrtOpt, children }) => {
    return (
        <div onClick={() => {
            setViewSrtOpt(!viewSrtOpt)
        }}
            className={(viewSrtOpt && 'active') + (" mob_ctg_sort_btn")}>
            <img src={mobSortIcon} alt="mobileImage" />
            <div className="mob_ctg_sort_title">
                {children}
            </div>
            <div className={(viewSrtOpt && 'active') + (" des_sorting_icon")}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default MobSortButton;