import React from 'react'
import foto from "../../img/small.jpg";
import './checkout.css'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src={foto} alt='one product image'/>
                <div>
                    <h2 className='checkout_title'>Your shopping Basket</h2>
                </div>
            </div>
        </div>
    )
}

export default Checkout
