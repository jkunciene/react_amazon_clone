import React from 'react';
import Product from '../product/Product'
import './home.css'
import cover from '../../img/cover.jpg'



function Home() {
    

    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' 
                src={cover}
                alt='amazon logo'
                />

                <div className='home_row'>
                  
                    
                        <Product
                            id={1}
                            title='JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black'
                            price={59.99}
                            image='https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg'
                            rating={3}
                        />

                          
                        <Product
                            id={2}
                            title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode,'
                            price={129.50}
                            image='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg'                            
                            rating={2}
                        />

                         <Product
                            id={3}
                            title='Monster Bluetooth Speaker, Adventurer Force IPX7 Waterproof Wireless Speaker 5.0 with Microphone Input, 40W Portable Bluetooth Speakers with 40H Playtime for Indoor Outdoor Party, Black'
                            price={109.90}
                            image='https://images-na.ssl-images-amazon.com/images/I/71IZGerctBL._AC_SL1001_.jpg'                            
                            rating={4}
                        />
                            
                  
                </div>
                </div>
        </div>
    )
}

export default Home
