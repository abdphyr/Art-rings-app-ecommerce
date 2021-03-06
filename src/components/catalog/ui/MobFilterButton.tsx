import React from 'react';
import filterIcon from '../../../images/filter.svg';

interface IMobFilterButton {
    setFilterPage: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const MobFilterButton: React.FC<IMobFilterButton> = ({ setFilterPage, children }) => {
    return (
        <div onClick={() => setFilterPage(true)} className="mob_ctg_filter_btn">
            <img src={filterIcon} alt="filterIcon" />
            <div className="mob_ctg_sort_title">
                {children}
            </div>
        </div>
    );
};

export default MobFilterButton;