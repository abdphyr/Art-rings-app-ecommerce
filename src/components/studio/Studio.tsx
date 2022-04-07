import React, { useState, useEffect, useRef } from "react";
import carouselimage from '../../images/carouselimage.png';
import './studio.css';
import studio from '../../images/studio.png';
import studio2 from '../../images/studio2.png';
import studio3 from '../../images/studio3.png';


const Studio = () => {

    const [trf, setTrf] = useState<number>(1)
    const intervalRef = useRef<number | null>(null)

    const carouselItems = [
        { id: 1, img: studio },
        { id: 2, img: studio2 },
        { id: 3, img: studio3 },
        { id: 4, img: studio },
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
        }, 2000)
        return () => {
            stopTrf()
        }
    }, [trf])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const studioCarouselItems: React.CSSProperties = {
        transition: "all 0.5s ease",
        width: `${100 * carouselItems.length}%`,
        transform: `translateX(-${(trf - 2) * (50 / carouselItems.length)}%`,
    }

    const studioCarouselItem: React.CSSProperties = {
        width: `${50}%`,
    }

    return (
        <div className='studio wrapper'>
            <div className="studio_title">
                СТУДИЯ
            </div>
            <div className="studio_body">
                <div>
                    <div className="studio_left">
                        <p>В «Art-Rings» выбрать обручальные и помолвочные кольца с лебедями вы
                            можете через каталог в интернет-магазине по фотографиям и при помощи
                            удобной системы фильтров. А еще удобнее сделать выбор, приехав лично
                            в наш офис, в котором можно посмотреть и померить любые модели колец,
                            а также получить подробные ответы на любые вопросы.</p>
                        <p>Мы находимся в Москве по адресу Большой Кисловский переулок, 5-7с1.
                            Посмотреть расположение на карте и сориентироваться как добраться до
                            нашего офиса можно на странице контакты.</p>
                        <p>В салоне «Art-Rings» Вас встретят менеджеры экстра-класса — профессионалы,
                            посвятившие ювелирному делу многие годы. Мы знаем об обручальных кольцах
                            все и поможем сделать выбор, который полностью устроит Вас и приведет в
                            восторг Вашу избранницу.</p>
                    </div>
                </div>
                <div>
                    <div className="studio_right">
                        <p>Менеджеры салона подробно расскажут об особенностях разных моделей, металлов
                            и сплавов, о камнях, с точностью определят нужный размер, порекомендуют
                            анатомически правильную посадку колец.</p>
                        <p>Если Вы хотите внести свои правки в дизайн колец (высота, толщина, количество
                            камней и их размер) и получить абсолютно уникальные и неповторимые кольца,
                            это тоже проще и удобней всего сделать в офисе. Приходите со своими фотографиями,
                            рисунками и эскизами — мы с радостью возьмемся воплотить любые мечты.</p>
                        <b>Ждём Вас ежедневно, по будням с 11:00 до 20:00, по выходным 11:00 до 17:00.</b>
                        <b>Тел.: +7 (499) 940-87-77</b>
                    </div>
                </div>
            </div>
            <div className="studio_carousel">
                <div style={studioCarouselItems}>
                    <div style={studioCarouselItem}>
                        {carouselItems.map(img => (
                            <div className="studio_carousel_item">
                                <img key={img.id} src={img.img} alt="rasm" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studio;