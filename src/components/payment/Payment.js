import React, {useEffect, useState} from 'react'
import './payment.css';
import {useStateValue} from '../StateProvider'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import {Link, useHistory} from "react-router-dom"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { db } from '../../firebase';




const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcesing] = useState(true);

    const [error, setError]=useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState();

    useEffect(()=>{
        //generate the special stripe secret
        //which allows us to charge a customer
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();

    }, [basket])

    console.log(clientSecret)
    const handleSubmit = async (event) => {
        //do all fancy stripe stuff
        event.preventDefault();
        setProcesing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcesing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }
    const handleChange = e => {
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className='payment_container'>

                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

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
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) =>(
                                        <>
                                            <p>
                                                Order Total: ({basket.length} items):
                                                <strong>{value}</strong>
                                            </p>
                                            <small className="subtotal_gift">
                                                <input type="checkbox"/>
                                                This order contains a gift
                                            </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeperator={true}
                                    prefix={'$'}
                                />
                            <button disabled={
                                processing || disabled ||
                                succeeded
                            }>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>

                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                            
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment
