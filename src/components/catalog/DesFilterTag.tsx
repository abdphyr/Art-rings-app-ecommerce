import React from 'react';

interface DesFilterTagProps {
    filterTagOptions: string[];
    filterTags: string[];
    handleTag: (item: string, filterInsert: string[]) => void;
    tagsShowAll: boolean;
    setTagsShowALL: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesFilterTag: React.FC<DesFilterTagProps> = (props) => {
    
    const { filterTagOptions, filterTags, handleTag, 
        tagsShowAll, setTagsShowALL } = props

    return (
        <div className="des_ctg_tools_filter_tags">
            <div className="des_ctg_tools_filter_title">
                ТЕГИ
            </div>
            <div className="des_ctg_tools_filter_tags_items">
                {filterTagOptions?.map((tag, i) => (
                    <div
                        key={i}
                        onClick={() => handleTag(tag, filterTags)}
                        className={(filterTags?.includes(tag) && 'active') + (" des_ctg_tools_filter_item")}>
                        {tag}
                    </div>
                ))}
            </div>
            {/* Filter tags all */}
            <div className="des_ctg_tools_filter_tags_show_all">
                <div onClick={() => setTagsShowALL(!tagsShowAll)} className="title_icon">показать все
                    <span className={(tagsShowAll && 'active') + (' icon')}>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                        </svg></span>
                </div>
                <div className={(tagsShowAll && 'active') + (" des_ctg_tools_filter_tags_items")}>
                    {filterTagOptions?.map((tag, i) => (
                        <div
                            key={i}
                            onClick={() => handleTag(tag, filterTags)}
                            className={(filterTags?.includes(tag) && 'active') + (" des_ctg_tools_filter_item")}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesFilterTag;