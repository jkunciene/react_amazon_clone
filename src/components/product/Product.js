import React from 'react'
import './product.css'

const Product = ({title, image, price, rating}) => {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    <p>{rating}</p>
                </div>
            </div>

            <img src={image}
            alt='product image'
            />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
