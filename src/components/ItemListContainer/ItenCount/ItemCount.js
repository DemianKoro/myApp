import React from 'react';
import './ItemCount.css';
import { useState } from 'react';
import OnAdd from './OnAdd/OnAdd';

const ItemCount = ({cero}) => {


    const [stock, setStock] = useState(false);
    const buttonMore = () => {
        setStock(stock+1)
    }
    const buttonLess = () => {
        setStock(stock-1)
    }

    // const [qty, setQty] = useState(false);
    // const OnAdd = () => {
    //     qty = stock;
    // }  

  return <>
         <div className="cantidad">
            <button onClick={buttonLess}type="button" className="btn">-</button>
            <p>{stock}</p>
            <button onClick={buttonMore} type="button" className="btn">+</button> 
            <div className="add">
            <OnAdd />
        </div>         
        </div>
  </>;
};

export default ItemCount;

