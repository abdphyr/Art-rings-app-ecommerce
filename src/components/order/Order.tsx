import React,{ useEffect, useState } from 'react';
import './order.css';
import order from '../../images/order.png';
import katalog1 from '../../images/katalog1.png';
import katalog2 from '../../images/katalog2.png';
import katalog3 from '../../images/katalog3.png';
import prevstrelka from '../../images/prevstrelka.svg';
import nextstrelka from '../../images/nextstrelka.svg';
import brand from '../../images/mainlogo.png';
import inputFile from '../../images/inputFile.svg';
import postImage from '../../images/postImage.svg';
import banner from '../../images/desctopVerticalBanner.png';

const Order:React.FC = () => {

    const [page, setPage] = useState(1)

    const OrderCrouselItems = [
        {id:1, img:katalog1},
        {id:2, img:katalog2},
        {id:3, img:katalog3},
        {id:4, img:katalog1},
        {id:5, img:katalog2},
        {id:6, img:katalog3},
        {id:7, img:katalog1},
        {id:8, img:katalog2},
        {id:9, img:katalog3},
        {id:10, img:katalog3},
    ]

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    const MAX_PAGE = Math.ceil(OrderCrouselItems.length / 3)

    const des_od_cr_items:React.CSSProperties = {
        display:'flex',
        width:`${MAX_PAGE * 100}%`,
        transition:'all 0.3s',
        transform:`translateX(-${(page - 1) * (100 / MAX_PAGE)}%)`
    }

    const des_od_cr_item:React.CSSProperties = {
        width:`${100 / (MAX_PAGE * 3)}%`
    }
        
    const mob_od_cr_items:React.CSSProperties = {
        display:'flex',
        width:`${OrderCrouselItems.length * 100}%`,
        transition:'all 0.3s',
        transform:`translateX(-${(page - 1) * (100 / OrderCrouselItems.length)}%)`
    }

    const mob_od_cr_item:React.CSSProperties = {
        width:`${100 / OrderCrouselItems.length}%`
    }
    
    return (
        <div className='order'>
            <div className="order_banner">
                <div className="order_banner_image">
                    <img src={order} alt="orderimage" />
                </div>
                <div className="order_banner_sec wrapper">
                    <div className="od_bn_title">
                        СОЗДАЙТЕ СВОЕ<br /> УНИКАЛЬНОЕ УКРАШЕНИЕ
                    </div>
                    <div className="od_bn_desc">
                        Загрузите фото с любым украшением и мы с радостью изготовим его для вас
                    </div>
                    <button className="od_bn_button">
                        РАССЧИТАТЬ СТОИМОСТЬ
                    </button>
                </div>
            </div>
            <div className="wrapper">
                <div className="order_work_examples">
                    <div className="od_wk_ex_title">
                        ПРИМЕРЫ РАБОТ
                    </div>
                    {/* desctop */}
                    <div className="des_od_cr">
                        <div style={des_od_cr_items} className="des_od_cr_items">
                            {OrderCrouselItems.map(item=>(
                                <div key={item.id} style={des_od_cr_item}>
                                    <div className="des_od_cr_item">
                                        <img src={item.img} alt="image" />
                                        <div className="des_od_cr_item_brand">
                                            <img src={brand} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="des_od_cr_items_btns">
                            <button onClick={()=>page>1 && setPage(page-1)} className={(page <=1 && 'disabled')+(" des_od_cr_items_btn")}>
                                <img src={prevstrelka} alt="prevstrelka" />  
                            </button>
                            <button onClick={()=>page<MAX_PAGE && setPage(page+1)} className={(page >=MAX_PAGE && 'disabled')+(" des_od_cr_items_btn")}>
                                <img src={nextstrelka} alt="nextstrelka" />
                            </button>
                        </div>
                        <div className="des_od_cr_items_lines">
                            {Array(MAX_PAGE).fill(MAX_PAGE).map((_,i)=>(
                                <div key={i+1} className={(page===i+1 && 'active')+(" des_od_cr_items_line")}></div>
                            ))}
                        </div>
                    </div>
                    {/* mobil */}
                    <div className="mob_od_cr">
                        <div className="mob_od_cr_body">
                            <div style={mob_od_cr_items} className="mob_od_cr_items">
                                {OrderCrouselItems.map(img=>(
                                    <div style={mob_od_cr_item}>
                                        <div className="mob_od_cr_item">
                                            <img src={img.img} alt="image" />
                                            <div className="brand">
                                                <img src={brand} alt="brand" />
                                            </div> 
                                        </div> 
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mob_pr_dt_info_images_btns">
                            {Array(OrderCrouselItems.length).fill(OrderCrouselItems.length).map((_,i)=>(
                                <div
                                    key={i}
                                    onClick={()=>setPage(i+1)} 
                                    className={(page===i+1 && 'active')+(' mob_pr_dt_info_images_btn')}>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="od_what_we_do">
                <div className="wrapper">
                    <div className="od_what_we_do_title">
                        КАК МЫ ЭТО ДЕЛАЕМ
                    </div>
                    <div className="steps">
                        <div className="step">
                            <img src={katalog1} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    1 этап
                                </div>
                                <div className="step_title">
                                    СОЗДАНИЕ КОНЦЕПЦИИ
                                </div>
                                <div className="step_desc">
                                    На этом этапе мы помогаем Вам определиться с концепцией будущего 
                                    украшения, металлом, подбираем вставки, рассчитываем примерную 
                                    стоимость готового изделия.
                                </div>
                                <div className="step_date">
                                    1-3 дня
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <img src={katalog2} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    2 этап
                                </div>
                                <div className="step_title">
                                    РАЗРАБОТКА ДИЗАЙНА
                                </div>
                                <div className="step_desc">
                                    Исходя из информации, полученной от Вас ранее, дизайнеры 
                                    готовят эскизы будущего изделия.
                                </div>
                                <div className="step_date">
                                    5-15 дней
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <img src={katalog3} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    3 этап
                                </div>
                                <div className="step_title">
                                    изготовление
                                </div>
                                <div className="step_desc">
                                    Согласованный дизайн передается ювелирам, 
                                    которые изготавливают будущее украшение. 
                                </div>
                                <div className="step_date">
                                    1-3 дня
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <img src={katalog1} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    4 этап
                                </div>
                                <div className="step_title">
                                    ДОСТАВКА и оплата
                                </div>
                                <div className="step_desc">
                                    Выполненный заказ передается клиенту. 
                                    Заказ комплектуется всеми необходимыми сертификатами (при наличии), 
                                    гарантией, подарочным футляром.
                                </div>
                                <div className="step_date">
                                    1-3 дня
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">{/*ORDER FOOTER*/}
                <div className="order_footer">
                    <div className="order_applic">
                        <h1 className="order_footer_title">
                            ОСТАВИТЬ ЗАЯВКУ
                        </h1>
                        <form className='od_applic_form' action="">
                            <div className="od_applic_form_name_photo">
                                <div className="od_applic_form_name">
                                    <label className='od_applic_form_label' htmlFor="name">Ваше имя</label>
                                    <input type="text" placeholder='Ваше имя' className='od_applic_form_input' id='name'  />
                                </div>
                                <div className="od_applic_file_input">
                                    <label htmlFor="od_applic_file_input">
                                        <img src={inputFile} alt="ЗАГРУЗИТЬ ФОТО" />
                                        <div>ЗАГРУЗИТЬ ФОТО</div>
                                    </label>
                                    <input style={{display:'none'}} type="file" id='od_applic_file_input' />
                                </div>
                            </div>
                            <div className="od_applic_form_phone_email">
                                <div className="od_applic_form_phone">
                                    <label htmlFor="phone" className='od_applic_form_label' >Ваш телефон</label>
                                    <input placeholder='Ваш телефон' type="text" className='od_applic_form_input' id='phone'  />
                                </div>
                                <div className="od_applic_form_email">
                                    <label htmlFor="email" className='od_applic_form_label'>Ваш e-mail</label>
                                    <input placeholder='Ваш e-mail' type="email" className='od_applic_form_input' id='email'  />
                                </div>
                            </div>
                            <div className="od_applic_text_input">
                                <label className='od_applic_form_label' htmlFor="od_applic_text_input">
                                    Комментарий
                                </label>
                                <textarea className='od_applic_textarea' placeholder='Комментарий' style={{resize:'none'}} name="" id="od_applic_text_input"></textarea>
                            </div>
                            <div className="od_applic_submit">
                                <button className="od_applic_calculate">
                                    РАССЧИТАТЬ СТОИМОСТЬ
                                </button>
                                <div className="mob_od_file_input">
                                    <label htmlFor="mob_od_file_input">
                                        <img src={postImage} alt="ЗАГРУЗИТЬ ФОТО" />
                                    </label>
                                    <input style={{display:'none'}} type="file" id='mob_od_file_input' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="order_footer_banner">
                        <img src={banner} alt="bbb" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Order;