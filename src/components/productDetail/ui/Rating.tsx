import React from 'react';

interface IRating {
    handleRating(rating: number): void;
    givenRating: number;
}

const Rating: React.FC<IRating> = ({ handleRating, givenRating }) => {
    return (
        <>
            <svg onClick={() => handleRating(1)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                <path stroke='#9EAFC2' fill={givenRating >= 1 ? '#9EAFC2' : 'none'} d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
            </svg>
            <svg onClick={() => handleRating(2)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                <path stroke='#9EAFC2' fill={givenRating >= 2 ? '#9EAFC2' : 'none'} d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
            </svg>
            <svg onClick={() => handleRating(3)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                <path stroke='#9EAFC2' fill={givenRating >= 3 ? '#9EAFC2' : 'none'} d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
            </svg>
            <svg onClick={() => handleRating(4)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                <path stroke='#9EAFC2' fill={givenRating >= 4 ? '#9EAFC2' : 'none'} d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
            </svg>
            <svg onClick={() => handleRating(5)} width="39" height="38" viewBox="0 0 39 38" fill="#9EAFC2" xmlns="http://www.w3.org/2000/svg">
                <path stroke='#9EAFC2' fill={givenRating >= 5 ? '#9EAFC2' : 'none'} d="M19.4233 0L14.2829 13.9613H0L11.6498 22.5213L6.46341 37.2196L19.4233 28.0375L32.3825 37.2196L27.1961 22.5213L38.8465 13.9613H24.5637L19.4233 0Z" />
            </svg>
        </>
    );
};

export default Rating;