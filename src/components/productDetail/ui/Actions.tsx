import React from 'react';
import { useDispatch } from 'react-redux';
import './actions.css';
import addCart from '../../../images/addCart.svg';
import WH from '../../../images/WH.svg';
import checkbox from '../../../images/checkbox.svg';
import { addItemCart } from '../../../features/cartSlice';
import { ProductDetailTypes } from '../productDetailTypes';

const Actions: React.FC<ProductDetailTypes> = (props) => {
    const { maleSize, setMaleSize, femaleSize, setFemaleSize } = props;
    const { flActive, setFlActive, mlActive, setMlActive } = props;
    const { product, sizes } = props
    const { price, discount } = product

    const dispatch = useDispatch()
    return (
        <>
            <div className="pr_dt_actions">{/*ACTIONS*/}
                <div className="pr_dt_price">
                    <div>{discount > 0 ? discount : price} ₽</div>
                    {discount && <span>{price} ₽</span>}
                </div>
                <div className="pr_dt_sizes">{/*SELECT SIZE*/}
                    <div className="pr_dt_sizes_female">
                        <div className="pr_dt_sizes_title">
                            Размер (жен.)
                        </div>
                        <div className="pr_dt_size" onClick={() => setFlActive(!flActive)}>
                            <div className={(flActive && 'active') + (" pr_dt_size_btn")}>
                                <div className={(flActive && 'passive') + (' show_size')}>{femaleSize.title}</div>
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M15 0.766667L8.32308 8L1.53846 0.766667" stroke="black" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className={(flActive && 'active') + (" pr_dt_size_items_wrapper")}>
                                <div className={(flActive && 'active') + (" pr_dt_size_items")}>
                                    {sizes.map(sizeItem => (
                                        <div key={sizeItem.size}
                                            onClick={() => {
                                                setFemaleSize(sizeItem)
                                                setFlActive(false)
                                            }}
                                            className={(femaleSize.size === sizeItem.size && 'active') + (" pr_dt_size_item")}>
                                            {sizeItem.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pr_dt_sizes_male">
                        <div className="pr_dt_sizes_title">
                            Размер (муж.)
                        </div>
                        <div className="pr_dt_size" onClick={() => setMlActive(!mlActive)}>
                            <div className={(mlActive && 'active') + (" pr_dt_size_btn")}>
                                <div className={(mlActive && 'passive') + (' show_size')}>{maleSize.title}</div>
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M15 0.766667L8.32308 8L1.53846 0.766667" stroke="black" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className={(mlActive && 'active') + (" pr_dt_size_items_wrapper")}>
                                <div className={(mlActive && 'active') + (" pr_dt_size_items")}>
                                    {sizes.map(sizeItem => (
                                        <div key={sizeItem.size}
                                            onClick={() => {
                                                setMaleSize(sizeItem)
                                                setMlActive(false)
                                            }}
                                            className={(maleSize.size === sizeItem.size && 'active') + (" pr_dt_size_item")}>
                                            {sizeItem.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    dispatch(addItemCart(product))
                }} onMouseDown={() => false} className="pr_dt_cart">
                    <img src={addCart} alt="addCart" />
                    <div>В КОРЗИНУ</div>
                </button>
                <div className="pr_dt_write">
                    <img src={WH} alt="addCart" />
                    <div>НАПИСАТЬ WHATSAPP</div>
                </div>
                <div className="pr_dt_studio">
                    <div className="example">
                        <img src={checkbox} alt="image" /><span>образцы этой модели представлены в студии</span>
                    </div>
                    <div className="title">- Срок изготовления: 14 календарных дней</div>
                    <div className="title">- Артикул: 987</div>
                    <div className="title">- Материал: <span>Золото 585 пробы</span> <a>(для размеров 16 и 18)</a></div>
                    <div className="title">- Вставки</div>
                    <div className="line"></div>
                </div>
                <div className="pr_dt_design">
                    <h6>Внесём любые правки в дизайн:</h6>
                    <div>- ширина, толщина, камни (добавить, убрать, размер, цвет)</div>
                    <div>- цвет колец (одноцветные, двухцветные)</div>
                    <div>- поверхность (глянцевая, матовая, текстурированная и т.д.)</div>
                    <div>- можно без гравировки эмблемы (лебеди)</div>
                    <div>- возможно изготовление в другой пробе и из других  драгоценных металлов</div>
                    <div>- возможно нанести свою гравировку</div>
                </div>
            </div>
        </>
    );
};

export default Actions;