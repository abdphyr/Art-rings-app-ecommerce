import React, { useEffect } from 'react';
import './notfound.css';
import notfound from '../../images/NotFound.png';
import { Link } from 'react-router-dom';
import styles from './notfound.module.css';

const NotFound: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='wrapper'>
            <div className="notfound">
                <div className="notfound_image">
                    <img src={notfound} alt="notfound" />
                </div>
                <div className="notfound_title">
                    Страница, которую вы ищете, устарела или не существует.
                </div>
                <Link to='/' className="notfound_btn">
                    <div>
                        НА ГЛАВНУЮ
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;