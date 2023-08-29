import React from 'react'
import CategoriesHeader from '../components/CategoriesHeader'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import CategoriesItem from '../components/CategoriesItem'

const Categories = () => {
    return (
        <>
            <CategoriesHeader />
            <CategoriesItem />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Categories