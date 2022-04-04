import React,{ useEffect } from 'react';
import './guarantees.css';
import grtsImg from '../../images/ImageGuarantees.png'


const Guarantees = () => {
    
    useEffect(() => {
        window.scrollTo(0,0 )
    }, [])
    
    return (
        <div className='guarantees'>
            <div className="wrapper grts">
                <div className="guarantees_left">
                <div className="guarantees_title_desc">
                    <div className="guarantees_title">
                        ГАРАНТИИ
                    </div>
                    <div className="guarantees_desc">
                        <p>Art-Rings предоставляет своим клиентам 
                            пожизненную гарантию на подлинность материалов 
                            и камней, из которых изготовлены наши ювелирные изделия.</p>
                        <p>Все ювелирные изделия Art-Rings клеймированы в соответствии 
                            с требованиями Пробирной палаты Российской Федерации, 
                            камни прошли геммологическую экспертизу.</p>
                        <p>Гарантия на форму кольца, полировку, гальванические 
                            покрытия и закрепку камней до 0,01 Кт составляет 1 год.</p>
                    </div>
                </div>
                </div>
                <div className="guarantees_rigth">
                    <img src={grtsImg} alt="Image" />
                </div>
            </div>
        </div>
    );
};

export default Guarantees;