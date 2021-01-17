import React,{useState,useEffect} from 'react';
import Product from '../product/Product'
import './home.css'



function Home() {
    

    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' 
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' 
                alt='amazon image'
                />

                <div className='home_row'>
                  
                    
                        <Product
                            title='Pirma'
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
