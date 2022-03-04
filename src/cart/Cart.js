import React from 'react'
import './Cart.css'
export const Cart = () => {
  return (
    <div className='cart-container'>
        <h2>Cart</h2>
        <div className='products-wrapper'>
            <div className='product'>
                <div className='product-dic'>
                    <div className='disc'>
                    <h3>Apollo </h3>
                    <h3>Running Short</h3>
                    <h4>$50</h4>
                    </div>
                    <div className='sizes'><span className='active'>S</span> <span>M</span></div>
                </div>
                <div className='image-container'>
                    <div className='product-count'>
                        <span>+</span>
                        <p>1</p>
                        <span>-</span>
                    </div>
                    <div className='product-image'>
                        <img src='https://via.placeholder.com/150' height={'100%'}/>    
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-dic'>
                    <div className='disc'>
                    <h3>Apollo </h3>
                    <h3>Running Short</h3>
                    <h4>$50</h4>
                    </div>
                    <div className='sizes'><span>S</span> <span className='active'>M</span></div>
                </div>
                <div className='image-container'>
                    <div className='product-count'>
                        <span>+</span>
                        <p>1</p>
                        <span>-</span>
                    </div>
                    <div className='product-image'>
                        <img src='https://via.placeholder.com/150' height={'100%'}/>    
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
