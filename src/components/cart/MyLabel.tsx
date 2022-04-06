import React from 'react';

interface MyLabelProps {
    htmlFor: string;
    className?: string;
    children: React.ReactNode;
}

const MyLabel: React.FC<MyLabelProps> = (props) => {
    const { htmlFor, className, children } = props
    return (
        <label htmlFor={htmlFor} className={className} >{children}</label>
    );
};

export default MyLabel;