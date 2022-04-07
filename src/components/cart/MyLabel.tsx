import React from 'react';

interface IMyLabel {
    htmlFor: string;
    className?: string;
    children: React.ReactNode;
}

const MyLabel: React.FC<IMyLabel> = (props) => {
    const { htmlFor, className, children } = props
    return (
        <label htmlFor={htmlFor} className={className} >{children}</label>
    );
};

export default MyLabel;