import React from 'react'
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
                        title='Pavadinimas'
                        price={20}
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
                        rating={5}
                    />
                    <Product/>
                   
                </div>
                  <div className='home_row'>
                    <Product/>
                    <Product/>
                    <Product/>

                </div>
                  <div className='home_row'>
                     <Product/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home
