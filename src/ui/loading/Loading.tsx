import React from 'react';
import './loading.css'

const Loader:React.FC = () => {
    
    const isFibonna = (number:number) => {
        let a = 1;
        let b = 1
        while (b < number){
            let c = b;
            b = b + a
            a = c           
        }
        if (b === number) {
            console.log(`Bu ${number} fibonnachi son`);
        } else {
            console.log(`Bu ${number} fibonnachi emas`)
        }
    }

    return (
        <div className='loader'>
            <div className="loading">
              <div className="load"></div>
              <div className="load"></div>
            </div>
        </div>
    );
};

export default Loader;