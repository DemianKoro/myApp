import React from 'react'
import './Products.css';

const Products = ({productName, productPrice}) => {
    return (
        <div>
            <h4 className='productName'>{productName}</h4>
            <h4 className='productPrice'>{productPrice}</h4>

        </div>
    )
}

export default Products
