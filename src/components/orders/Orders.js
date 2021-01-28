import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../StateProvider';
import './orders.css';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {

        if(user){

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot=>(
                          setOrders(snapshot.docs.map( doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
              
                ))
        } else {
            setOrders([])
        }
    }, [user])
    return (
        <div className='orders'>
            orders
        </div>
    )
}

export default Orders
