import React from 'react'
import './payment.css';
import {useStateValue} from '../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';


const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className='payment_container'>

                {/* Payment Section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title"> 
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}
                <div className="payment_section">
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
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
                {/* Payment Section - Payment method */}
                <div className="payment_section">

                </div>


            </div>
        </div>
    )
}

export default Payment
