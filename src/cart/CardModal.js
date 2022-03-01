import React from 'react'
import './modal.css'
export const CardModal = () => {
  return (
    <div className='card-modal-container'>
        <h1>My Bag , <span>2 items</span></h1>
        <div className='products-container'>
            <div className='product'>
                <div className='product-dic'>
                    <p>Apollo Running Short</p>
                    <p>$50</p>
                    <div className='sizes'><span>S</span> <span>M</span></div>
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
        <div className='products-container'>
            <div className='product'>
                <div className='product-dic'>
                    <p>Apollo Running Short</p>
                    <p>$50</p>
                    <div className='sizes'><span>S</span> <span>M</span></div>
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
        <div className='total'>
            <p>Total</p>
            <p>$100.00</p>
        </div>
        <div className='btns'>
            <button>VIEW BAG</button>
            <button className='check'>CHECK OUT</button>
        </div>
    </div>
  )
}
