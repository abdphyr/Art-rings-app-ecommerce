import React from 'react';
import './pagination.css';

interface IPagination {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    length: number;
}

const Pagination: React.FC<IPagination> = (props) => {

    const { page, setPage, length } = props

    const pg_style: React.CSSProperties = {
        width: `${length * 25}px`,
        transform: `translateX(-${(page - 2) * 25}px)`
    }

    if (length === 0) return <></>

    return (
        <div className="pag">
            {/* prev */}
            <div onClick={() => page > 1 && setPage(page - 1)}
                className={(page <= 1 ? 'disallow' : '') + (" pag_prev")}>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.2 12L1 6.27692L7.2 0.461538" stroke="#020F59" />
                </svg>
                <div className="pag_title">
                    Предыдущая
                </div>
            </div>
            {/* pagination body */}
            <div className="pag_section">
                <div className="pag_body">
                    <div style={pg_style} className="pag_items">
                        {Array(length).fill(length).map((_, i) => (
                            <div key={i}
                                onClick={() => setPage(i + 1)}
                                className={(page === i + 1 ? 'active' : '') + (" pag_item")}
                            ><div>{i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pag_numbers">
                    ...{length}
                </div>
            </div>
            {/* next */}
            <div onClick={() => page < length && setPage(page + 1)}
                className={(page >= length ? 'disallow' : '') + (" pag_next")}>
                <div className="pag_title">
                    Следующая
                </div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.8 1L7 6.72308L0.8 12.5385" stroke="#020F59" />
                </svg>
            </div>
        </div>
    );
};

export default Pagination;