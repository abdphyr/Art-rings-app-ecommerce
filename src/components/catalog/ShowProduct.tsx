import React from 'react';

interface ShowProductProps {
    showing: boolean;
    setShowing: React.Dispatch<React.SetStateAction<boolean>>;
    showNumber: number;
    setShowNumber: React.Dispatch<React.SetStateAction<number>>;
    productsLength: number
}

const ShowProduct: React.FC<ShowProductProps> = (props) => {
    const { showing, setShowing, showNumber, setShowNumber, productsLength } = props
    return (
        <div className="des_ctg_tools_sort_showing">
            <div className='des_showing_title'>Показать:</div>
            <div onClick={() => setShowing(!showing)} className="des_ctg_tools_sort_showing_content">
                <div className="des_showing_number">{showNumber}</div>
                <div className={(showing && 'active') + (" des_showing_icon")}>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0.8L7.27692 7L1.46154 0.8" stroke="#020F59" strokeWidth="2" />
                    </svg>
                </div>
                <div className={(showing && 'active') + (" des_showing_numbers")}>
                    {Array(productsLength).fill(productsLength).map((_, i) => (
                        <div onClick={() => {
                            setShowNumber(i + 1)
                            setShowing(!showing)
                        }} key={i} className="des_showing_number">
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ShowProduct;