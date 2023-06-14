import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Contacts = () => {
    return (
        <div >
            <Header />
            <Footer />
            <Outlet />
        </div>
    )
}

export default Contacts