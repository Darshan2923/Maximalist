import React from 'react'
import '../styles/Hero.css'
import Hero1 from '../assets/hero/hero-main1.jpg'
import Hero2 from '../assets/hero/hero-main2.jpg'
import Hero3 from '../assets/hero/hero-main3.jpg'
import Hero4 from '../assets/hero/hero-main4.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="container">
                    <div className="grid-container">
                        <div className="featured grid-one">
                            <Link to='/categories/mens'>
                                <div className="lil-overlay" id='img1'></div>
                                <img src={Hero1} alt="img1" />
                                <p className="main-description">Mens Collection</p>
                            </Link>
                        </div>
                        <div className="featured grid-two">
                            <Link to="categories/womens">
                                <div id="img2" className="lil-overlay"></div>
                                <img src={Hero2} alt="img2" />
                                <p className="main-description">Women's Wear</p>
                            </Link>
                        </div>
                        <div className="featured grid-four">
                            <Link to="categories/skin-care">
                                <div id="img3" className="lil-overlay"></div>
                                <img src={Hero3} alt="img3" />
                                <p className="main-description">Skincare</p>
                            </Link>
                        </div>
                        <div className="featured grid-four-low">
                            <Link to="categories/electronics">
                                <div id="img4" className="lil-overlay"></div>
                                <img src={Hero4} alt="img4" />
                                <p className="main-description">Electronics</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero