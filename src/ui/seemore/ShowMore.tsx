import React from 'react';
import './showmore.css';

interface ShowMoreProps {
    func: React.Dispatch<React.SetStateAction<boolean>>;
    bool?: boolean;
    length?: number;
    children: React.ReactNode;
}

const ShowMore: React.FC<ShowMoreProps> = ({ func, bool, children, length }) => {
    return (
        <button onClick={() => func(!bool)} className={(length === 0 && "no") + (" show_more")}>
            {children}
            <span className={(bool && 'active') + (" show_more_icon")}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                </svg>
            </span>
        </button>
    );
};

export default ShowMore;