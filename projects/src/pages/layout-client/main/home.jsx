import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
import Logistics from './Logistics'
import Blog from './Blog'
import Banner from '../Header/banner/banner'
import Brand from './Brand'
import Product from './products/Product'
import Scroll from './scrolls/scrolls'
import Notification from './Notification/Notification'
const HomePage = () => {
    return (
        <div>
            <Header />
            <Notification />
            <Banner />
            <Brand />
            <Product />
            <Logistics />
            <Blog />
            <Scroll />
            <Footer />
        </div>

    )
}

export default HomePage