import React, { useEffect, useState } from 'react';
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

const Order: React.FC = () => {

    const [page, setPage] = useState(1)

    const OrderCrouselItems = [
        { id: 1, img: katalog1 },
        { id: 2, img: katalog2 },
        { id: 3, img: katalog3 },
        { id: 4, img: katalog1 },
        { id: 5, img: katalog2 },
        { id: 6, img: katalog3 },
        { id: 7, img: katalog1 },
        { id: 8, img: katalog2 },
        { id: 9, img: katalog3 },
        { id: 10, img: katalog3 },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const MAX_PAGE = Math.ceil(OrderCrouselItems.length / 3)

    const des_od_cr_items: React.CSSProperties = {
        display: 'flex',
        width: `${MAX_PAGE * 100}%`,
        transition: 'all 0.3s',
        transform: `translateX(-${(page - 1) * (100 / MAX_PAGE)}%)`
    }

    const des_od_cr_item: React.CSSProperties = {
        width: `${100 / (MAX_PAGE * 3)}%`
    }

    const mob_od_cr_items: React.CSSProperties = {
        display: 'flex',
        width: `${OrderCrouselItems.length * 100}%`,
        transition: 'all 0.3s',
        transform: `translateX(-${(page - 1) * (100 / OrderCrouselItems.length)}%)`
    }

    const mob_od_cr_item: React.CSSProperties = {
        width: `${100 / OrderCrouselItems.length}%`
    }

    return (
        <div className='order'>
            <div className="order_banner">
                <div className="order_banner_image">
                    <img src={order} alt="orderimage" />
                </div>
                <div className="order_banner_sec wrapper">
                    <div className="od_bn_title">
                        ???????????????? ????????<br /> ???????????????????? ??????????????????
                    </div>
                    <div className="od_bn_desc">
                        ?????????????????? ???????? ?? ?????????? ???????????????????? ?? ???? ?? ???????????????? ?????????????????? ?????? ?????? ??????
                    </div>
                    <button className="od_bn_button">
                        ???????????????????? ??????????????????
                    </button>
                </div>
            </div>
            <div className="wrapper">
                <div className="order_work_examples">
                    <div className="od_wk_ex_title">
                        ?????????????? ??????????
                    </div>
                    {/* desctop */}
                    <div className="des_od_cr">
                        <div style={des_od_cr_items} className="des_od_cr_items">
                            {OrderCrouselItems.map((item, i) => (
                                <div key={i} style={des_od_cr_item}>
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
                            <button onClick={() => page > 1 && setPage(page - 1)} className={(page <= 1 && 'disabled') + (" des_od_cr_items_btn")}>
                                <img src={prevstrelka} alt="prevstrelka" />
                            </button>
                            <button onClick={() => page < MAX_PAGE && setPage(page + 1)} className={(page >= MAX_PAGE && 'disabled') + (" des_od_cr_items_btn")}>
                                <img src={nextstrelka} alt="nextstrelka" />
                            </button>
                        </div>
                        <div className="des_od_cr_items_lines">
                            {Array(MAX_PAGE).fill(MAX_PAGE).map((_, i) => (
                                <div key={i + 1} className={(page === i + 1 && 'active') + (" des_od_cr_items_line")}></div>
                            ))}
                        </div>
                    </div>
                    {/* mobil */}
                    <div className="mob_od_cr">
                        <div className="mob_od_cr_body">
                            <div style={mob_od_cr_items} className="mob_od_cr_items">
                                {OrderCrouselItems.map(img => (
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
                            {Array(OrderCrouselItems.length).fill(OrderCrouselItems.length).map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setPage(i + 1)}
                                    className={(page === i + 1 && 'active') + (' mob_pr_dt_info_images_btn')}>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="od_what_we_do">
                <div className="wrapper">
                    <div className="od_what_we_do_title">
                        ?????? ???? ?????? ????????????
                    </div>
                    <div className="steps">
                        <div className="step">
                            <img src={katalog1} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    1 ????????
                                </div>
                                <div className="step_title">
                                    ???????????????? ??????????????????
                                </div>
                                <div className="step_desc">
                                    ???? ???????? ?????????? ???? ???????????????? ?????? ???????????????????????? ?? ???????????????????? ????????????????
                                    ??????????????????, ????????????????, ?????????????????? ??????????????, ???????????????????????? ??????????????????
                                    ?????????????????? ???????????????? ??????????????.
                                </div>
                                <div className="step_date">
                                    1-3 ??????
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <img src={katalog2} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    2 ????????
                                </div>
                                <div className="step_title">
                                    ???????????????????? ??????????????
                                </div>
                                <div className="step_desc">
                                    ???????????? ???? ????????????????????, ???????????????????? ???? ?????? ??????????, ??????????????????
                                    ?????????????? ???????????? ???????????????? ??????????????.
                                </div>
                                <div className="step_date">
                                    5-15 ????????
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <img src={katalog3} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    3 ????????
                                </div>
                                <div className="step_title">
                                    ????????????????????????
                                </div>
                                <div className="step_desc">
                                    ?????????????????????????? ???????????? ???????????????????? ????????????????,
                                    ?????????????? ?????????????????????????? ?????????????? ??????????????????.
                                </div>
                                <div className="step_date">
                                    1-3 ??????
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <img src={katalog1} alt="backimage" />
                            <div className="step_body">
                                <div className="step_number">
                                    4 ????????
                                </div>
                                <div className="step_title">
                                    ???????????????? ?? ????????????
                                </div>
                                <div className="step_desc">
                                    ?????????????????????? ?????????? ???????????????????? ??????????????.
                                    ?????????? ?????????????????????????? ?????????? ???????????????????????? ?????????????????????????? (?????? ??????????????),
                                    ??????????????????, ???????????????????? ????????????????.
                                </div>
                                <div className="step_date">
                                    1-3 ??????
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
                            ???????????????? ????????????
                        </h1>
                        <form className='od_applic_form' action="">
                            <div className="od_applic_form_name_photo">
                                <div className="od_applic_form_name">
                                    <label className='od_applic_form_label' htmlFor="name">???????? ??????</label>
                                    <input type="text" placeholder='???????? ??????' className='od_applic_form_input' id='name' />
                                </div>
                                <div className="od_applic_file_input">
                                    <label htmlFor="od_applic_file_input">
                                        <img src={inputFile} alt="?????????????????? ????????" />
                                        <div>?????????????????? ????????</div>
                                    </label>
                                    <input style={{ display: 'none' }} type="file" id='od_applic_file_input' />
                                </div>
                            </div>
                            <div className="od_applic_form_phone_email">
                                <div className="od_applic_form_phone">
                                    <label htmlFor="phone" className='od_applic_form_label' >?????? ??????????????</label>
                                    <input placeholder='?????? ??????????????' type="text" className='od_applic_form_input' id='phone' />
                                </div>
                                <div className="od_applic_form_email">
                                    <label htmlFor="email" className='od_applic_form_label'>?????? e-mail</label>
                                    <input placeholder='?????? e-mail' type="email" className='od_applic_form_input' id='email' />
                                </div>
                            </div>
                            <div className="od_applic_text_input">
                                <label className='od_applic_form_label' htmlFor="od_applic_text_input">
                                    ??????????????????????
                                </label>
                                <textarea className='od_applic_textarea' placeholder='??????????????????????' style={{ resize: 'none' }} name="" id="od_applic_text_input"></textarea>
                            </div>
                            <div className="od_applic_submit">
                                <button className="od_applic_calculate">
                                    ???????????????????? ??????????????????
                                </button>
                                <div className="mob_od_file_input">
                                    <label htmlFor="mob_od_file_input">
                                        <img src={postImage} alt="?????????????????? ????????" />
                                    </label>
                                    <input style={{ display: 'none' }} type="file" id='mob_od_file_input' />
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