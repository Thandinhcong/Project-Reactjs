import React from 'react'
import "./banner.css"
const Banner = () => {
    return (
        <div className='banner1 '>
            <div className='container banner'>
                <img src="../banner.png" alt="" />
                <div className='banner-item'>
                    <h5><i>2023 New Arrivals</i></h5>
                    <h1>Giảm giá tới 70%</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem at officiis minima, quisquam odio voluptatem assumenda id voluptatum repudiandae dolorum officia sequi maxime ipsum sint sapiente facilis vero quos.</p>
                    <a href="#">MUA NGAY</a>
                </div>
            </div>
        </div>
    )
}

export default Banner