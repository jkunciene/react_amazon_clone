import React from 'react'
import foto from "../../img/small.jpg";

import Subtotal from '../subtotal/Subtotal';
import './checkout.css'

import {useStateValue} from '../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src={foto} alt='one product'/>
                <div>
                    <h2 className='checkout_title'>Your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}



                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
