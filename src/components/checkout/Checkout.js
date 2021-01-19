import React from 'react'
import foto from "../../img/small.jpg";
import BasketItem from '../basketItem/BasketItem';
import Subtotal from '../subtotal/Subtotal';
import './checkout.css'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src={foto} alt='one product'/>
                <div>
                    <h2 className='checkout_title'>Your shopping Basket</h2>
                    <BasketItem/>
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
