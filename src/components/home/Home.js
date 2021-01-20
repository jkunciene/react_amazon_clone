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
                            title='Pirma'
                            price={10}
                            image='https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg'
                            rating={4}
                        />

                          
                        <Product
                            id={2}
                            title='Antra'
                            price={10}
                            image='https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg'
                            rating={4}
                        />
                            
                  
                </div>
                </div>
        </div>
    )
}

export default Home
