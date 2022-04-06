import React,{ useEffect } from 'react';
import './deliveryandpayment.css';
import deliver from '../../images/deliver.png';

const DeliveryAndPayment:React.FC = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className='delivery'>
            <div className="wrapper deliveryandpayment">
                <div className="delivery_payment">
                    <div className="delivery_title">
                        ДОСТАВКА И ОПЛАТА
                    </div>
                    <div className="delivery_desc">
                        <p>Все ювелирные изделия Art-Rings изготовляются после 
                            получения компанией информации по следующим параметрам: 
                            материал изделия (изделий), цвет изделия (изделий), размер 
                            изделия (изделий), материал вставок, а также после осуществления 
                            предоплаты в размере 50% от стоимости заказа.</p>
                        <p>Доставка в регионы России (кроме Москвы) осуществляется 
                            транспортной компанией согласно правил транспортировки 
                            ювелирных изделий и производится БЕСПЛАТНО.</p>
                    </div>
                </div>
                <img src={deliver} alt="deliveryimage" />
            </div>
        </div>
    );
};

export default DeliveryAndPayment;