import React from 'react';

interface IAnimation {
    animation: boolean;
    setAnimation: React.Dispatch<React.SetStateAction<boolean>>
}

const Animation: React.FC<IAnimation> = (props) => {

    const { animation, setAnimation } = props
    return (
        <div className="des_ctg_tools_sort_animation">
            <div onClick={() => setAnimation(!animation)} className={(animation && 'active') + (' des_animation_icon')}>
                <div></div>
            </div>
            <div className='des_animation_icon_text'>Анимация</div>
        </div>
    );
};

export default Animation;