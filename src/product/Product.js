import React from 'react'
import './product.css'
export const Product = () => {
  return (
    <div className='product-wrapper'>
        <div className='sample-pics'>
            <div className='img'>
            <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='img'>
            <img src='https://via.placeholder.com/300'></img>
            </div>
            <div className='img'>
            <img src='https://via.placeholder.com/300'></img>
            </div>
        </div>
        <div className='product-main'>
            <img src='https://via.placeholder.com/300'></img>
            <div className='product-details'>
                <h2>Apollo</h2>
                <h4>Running Shorts</h4>
                <h5>sizes</h5>
                <div className='sizes'>
                    <span>XS</span>
                    <span className='active'>S</span>
                    <span>M</span>
                    <span>L</span>
                </div>
                <h5>Price</h5>
                <h5>$50.00</h5>
                <button>ADD TO CART</button>
                <p>Find Stunning Find Stunning Find Stunning Find StunningFind StunningFind StunningFind StunningFind StunningFind StunningFind StunningFind StunningFind Stunning</p>
            </div>
        </div>
    </div>
  )
}
