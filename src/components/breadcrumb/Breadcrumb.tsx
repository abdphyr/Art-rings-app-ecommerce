import './breadcrumb.css';
import React from 'react';
import { Location,Link } from 'react-router-dom';


const Breadcrumb = ({location}:{location:Location}) => {
    let path:string=''
    const route:string[] = location.pathname.split('/')
    const route1:string = route[0]
    const route2:string = route[1]
    const route3:string = route[2]
    const route4:string = route[3]
    
    if(route3 === "wedding"){
        path = 'Обручальные кольца'
    }
    if(route3 === "ingagement"){
        path = 'Помолвочные кольца'
    }
    if(route3 === "weddingduet"){
        path = 'Свадебные дуэты'
    }

    return (
        <div className='breadcrumb'>
            <Link to='/'>Главная</Link>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.8 1L7 6.72308L0.8 12.5385" stroke="#000"/>
            </svg>
            {route3 && 
                <>
                <Link to='/'>Каталог</Link>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.8 1L7 6.72308L0.8 12.5385" stroke="#000"/>
                </svg>
                </>
            }
            {route4 && 
                <>
                {route3==='new'?<></>:
                <>
                    <Link to={`/catalog/${route3}`}>{path}</Link>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.8 1L7 6.72308L0.8 12.5385" stroke="#000"/>
                    </svg>
                </>
                }
                </>
            }
        </div>
    );
};

export default Breadcrumb;