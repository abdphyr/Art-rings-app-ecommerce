import React from 'react';

interface IActionButton {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    setSize: React.Dispatch<React.SetStateAction<{
        title: string;
        size: number;
    }>>;
    size: {
        title: string;
        size: number;
    };
    sizes: {
        title: string;
        size: number;
    }[];
}

const ActionButton: React.FC<IActionButton> = (props) => {

    const { active, setActive, size, setSize, sizes } = props;

    return (
        <div className="pr_dt_size" onClick={() => setActive(!active)}>
            <div className={(active && 'active') + (" pr_dt_size_btn")}>
                <div className={(active && 'passive') + (' show_size')}>{size.title}</div>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M15 0.766667L8.32308 8L1.53846 0.766667" stroke="black" strokeWidth="2" />
                </svg>
            </div>
            <div className={(active && 'active') + (" pr_dt_size_items_wrapper")}>
                <div className={(active && 'active') + (" pr_dt_size_items")}>
                    {sizes.map(sizeItem => (
                        <div key={sizeItem.size}
                            onClick={() => {
                                setSize(sizeItem)
                                setActive(false)
                            }}
                            className={(size.size === sizeItem.size && 'active') + (" pr_dt_size_item")}>
                            {sizeItem.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActionButton;