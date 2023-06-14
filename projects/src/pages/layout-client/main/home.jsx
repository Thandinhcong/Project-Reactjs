import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
import Logistics from './Logistics'
import Blog from './Blog'
import Banner from '../Header/banner/banner'
import Brand from './Brand'
import Product from './Product'
const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Brand />
            <Product />
            <Logistics />
            <Blog />
            <Footer />
        </div>

    )
}

export default HomePage