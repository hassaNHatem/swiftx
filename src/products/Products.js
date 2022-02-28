import React from 'react'
import './products.css'
export const Products = () => {
    return (
        <div className='products-wrapper'>
            <h1>Category name</h1>
            <div className='product-container'>
                <div><img src='https://via.placeholder.com/300' />
                    <h5>some label</h5>
                    <p>$50.00</p>
                </div>
                <div><img src='https://via.placeholder.com/300' />
                    <h5>some label</h5>
                    <p>$50.00</p>
                </div>
                <div><img src='https://via.placeholder.com/300' />
                    <h5>some label</h5>
                    <p>$50.00</p>
                </div>
                <div><img src='https://via.placeholder.com/300' />
                    <h5>some label</h5>
                    <p>$50.00</p>
                </div>
                
            </div>
        </div>
    )
}
