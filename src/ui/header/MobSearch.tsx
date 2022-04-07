import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../features/searchSlice';

interface MobSearch {
    showSearch: boolean;
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
    search: string;
}

const MobSearch: React.FC<MobSearch> = (props) => {
    const { showSearch, setShowSearch, search } = props
    const dispatch = useDispatch()
    return (
        <div className={(showSearch && 'active') + (" mob_search_section")}>
            <div className="wrapper">
                <div className="mob_search_input">
                    <input onChange={(e) => dispatch(setSearch(e.target.value))}
                        value={search}
                        placeholder="Введите артикул" type="text" />
                    <button onClick={() => {
                        setShowSearch(false)
                    }}>НАЙТИ</button>
                </div>
            </div>
        </div>
    );
};

export default MobSearch;