import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Banner1 from '../assets/banner/banner2.jpg'
import Banner2 from '../assets/banner/banner3.jpg'
import Banner from '../components/Banner'
import BannerReverse from '../components/BannerReverse'

const Home = () => {
    return (
        <>
            <Hero />
            <Banner
                title="Creative harmonious living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner1}
            />
            <BannerReverse
                title="Comfortable & Elegante Living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner2}
            />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home