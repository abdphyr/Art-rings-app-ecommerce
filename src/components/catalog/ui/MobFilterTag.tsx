import React from 'react';
import filterRadioBtn from '../../../images/filterRadioBtn.svg';

interface MobFilterTagProps {
    filterTagsActive: boolean;
    setFilterTagsActive: React.Dispatch<React.SetStateAction<boolean>>;
    filterTagOptions: string[];
    filterTags: string[];
    handleTag: (item: string, filterInsert: string[]) => void;
}

const MobFilterTag: React.FC<MobFilterTagProps> = (props) => {

    const { filterTagsActive, setFilterTagsActive } = props
    const { filterTagOptions, filterTags, handleTag } = props

    const handleSetTag = (item: typeof filterTags[number]) => handleTag(item, filterTags);
    const handleFilterTagActive = () => setFilterTagsActive(!filterTagsActive)

    return (
        <>
            <div onClick={handleFilterTagActive}
                className={(filterTagsActive && 'active') + (" mob_ctg_filter_header wrapper")}>
                <div className="mob_ctg_filter_header_title">
                    Теги
                </div>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </div>
            <div className={(filterTagsActive && 'active') + (" mob_ctg_filter_body_items")}>
                {filterTagOptions.map((item) => (
                    <div
                        key={item}
                        className='mob_ctg_filter_body_item'
                        onClick={() => handleSetTag(item)}
                    >
                        <div className="mob_ctg_filter_body_title_icon wrapper">
                            <div className="filter_body_title">{item}</div>
                            <div className={(filterTags?.includes(item) && 'active') + (" filter_body_tag_icon")}>
                                <img src={filterRadioBtn} alt="kkk" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MobFilterTag;