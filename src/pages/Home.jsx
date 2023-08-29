import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Banner1 from '../assets/banner/banner2.png'
import Banner2 from '../assets/banner/banner3.png'
import Banner from '../components/Banner'
import BannerReverse from '../components/BannerReverse'
import ProudProducts from '../components/ProudProducts'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <Hero />
            <ProudProducts />
            <Banner
                title="Youthful College Accessories"
                text=" Our Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner1}
            />
            <Trending />
            <BannerReverse
                title="Campus Style Hub"
                text=" Our Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner2}
            />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home