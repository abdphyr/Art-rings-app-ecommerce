import React from 'react';

interface MyInputProps {
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
    id?: string;
}

const MyInput: React.FC<MyInputProps> = (props) => {
    const { type, placeholder, className, id } = props
    return (
        <input type={type} placeholder={placeholder} className={className} id={id} />
    );
};

export default MyInput;