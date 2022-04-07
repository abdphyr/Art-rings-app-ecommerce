import React from 'react';

interface IMobFilterInsert {
    filterInsertActive: boolean;
    setFilterInsertActive: React.Dispatch<React.SetStateAction<boolean>>;
    filterInsertOptions: string[];
    filterInsert: string;
    handleInsert: (item: string, filterInsert: string) => void;
}

const MobFilterInsert: React.FC<IMobFilterInsert> = (props) => {

    const { filterInsertActive, setFilterInsertActive } = props
    const { filterInsertOptions, filterInsert, handleInsert } = props

    const handleSetInsert = (item: typeof filterInsert) => handleInsert(item, filterInsert);
    const handleFilterInsertActive = () => setFilterInsertActive(!filterInsertActive)

    return (
        <>
            <div onClick={handleFilterInsertActive}
                className={(filterInsertActive && 'active') + (" mob_ctg_filter_header wrapper")}>
                <div className="mob_ctg_filter_header_title">
                    Вставки
                </div>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </div>
            <div className={(filterInsertActive && 'active') + (" mob_ctg_filter_body_items")}>
                {filterInsertOptions.map((item) => (
                    <div
                        key={item}
                        className='mob_ctg_filter_body_item'
                        onClick={() => handleSetInsert(item)}
                    >
                        <div className="mob_ctg_filter_body_title_icon wrapper">
                            <div className="filter_body_title">{item}</div>
                            <div className="filter_body_icon">
                                <div className={(filterInsert === item && 'active') + ''}></div></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MobFilterInsert;