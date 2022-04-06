import './maincarousel.css';
import React, { useState, useEffect, useRef } from "react";
import carouselimage from '../../images/carouselimage.png';
import prevstrelka from '../../images/prevstrelka.svg';
import nextstrelka from '../../images/nextstrelka.svg';

const MainCarousel:React.FC = () => {

    const [trf, setTrf] = useState<number>(1)
    const intervalRef = useRef<number | null>(null)

    const carouselItems = [
        { id: 1, img: carouselimage },
        { id: 2, img: carouselimage },
        { id: 3, img: carouselimage },
        { id: 4, img: carouselimage },
        { id: 5, img: carouselimage },
        { id: 6, img: carouselimage },
        { id: 7, img: carouselimage },
        { id: 8, img: carouselimage },
        { id: 9, img: carouselimage },
    ]

    const stopTrf = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            if (trf < carouselItems.length) {
                setTrf(trf + 1)
            } else {
                setTrf(1)
            }
        }, 4000)
        return () => {
            stopTrf()
        }
    }, [trf])

    const items: React.CSSProperties = {
        transition: "all 0.5s ease",
        width: `${100 * carouselItems.length}%`,
        transform: `translateX(-${(trf - 1) * (100 / carouselItems.length)}%`
    }
    const prev = () => {
        if (trf > 1) setTrf(trf - 1)
    }
    const next = () => {
        if (trf < carouselItems.length) setTrf(trf + 1)
    }

    return (
        <div className="main_carousel">
            <div className="main_cr_title">
                Oсобенные обручальные кольца
            </div>
            <div className="main_cr_ctrl_buttons">
                <button onClick={prev} className={(trf === 1 && 'disabled') + (" main_cr_ctrl_button")}>
                    <img src={prevstrelka} alt="prevstrelka" />
                </button>
                <button onClick={next} className={(trf === carouselItems.length && 'disabled') + (" main_cr_ctrl_button")}>
                    <img src={nextstrelka} alt="nextstrelka" />
                </button>
            </div>
            <div style={items} className="main_cr_items">
                {carouselItems.map(item => (
                    <div key={item.id} className="main_cr_item">
                        <img src={item.img} alt="CarouselImage" />
                    </div>
                ))}
            </div>
            <div className="main_cr_buttons">
                {carouselItems.map(item => (
                    <div onClick={() => {
                        setTrf(item.id)
                        stopTrf()
                    }} key={item.id}
                        className={(trf === item.id && 'active') + (" main_cr_button")}>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCarousel;
