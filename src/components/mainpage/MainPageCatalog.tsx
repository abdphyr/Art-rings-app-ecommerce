import React from 'react';
import katalog1 from '../../images/katalog1.png';
import katalog2 from '../../images/katalog2.png';
import katalog3 from '../../images/katalog3.png';
import { Link} from "react-router-dom";


const MainPageCatalog:React.FC = () => {
    return (
        <div className="mainpage_catalog">
            <div className="wrapper">
                <div className="mp_ct">
                    <div className="mp_ct_title">
                        КАТАЛОГ
                    </div>
                    <div className="mp_ct_items">
                        <div className="mp_ct_item">
                            <img src={katalog1} alt="katalog1" />
                            <Link to='catalog/wedding' className="mp_ct_link">
                                <a >ОБРУЧАЛЬНЫЕ КОЛЬЦА</a>
                            </Link>
                        </div>
                        <div className="mp_ct_item">
                            <img src={katalog2} alt="katalog1" />
                            <Link to='catalog/ingagement' className="mp_ct_link">
                                <a>ПОМОЛВОЧНЫЕ КОЛЬЦА</a>
                            </Link>
                        </div>
                        <div className="mp_ct_item">
                            <img src={katalog3} alt="katalog1" />
                            <Link to='catalog/weddingduet' className="mp_ct_link">
                                <a>СВАДЕБНЫЕ ДУЭТЫ</a>
                            </Link>
                        </div>
                        <div className="mp_ct_item">
                            <img src={katalog1} alt="katalog1" />
                            <Link to='/order' className="mp_ct_link">
                                <a>НА ЗАКАЗ</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageCatalog;