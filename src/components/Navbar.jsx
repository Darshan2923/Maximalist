import React, { useContext, useState } from 'react'
import '../styles/Navbar.css'
import Logo1 from '../assets/logo-main.png'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import CartWithItems from "./CartWithItems";
import { CartContext } from '../pages/ProductPage'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [cart, setCart] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const openCart = () => {
        setCart(!cart);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const { cartItem } = useContext(CartContext);



    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
                <i className="fa-sharp fa-solid fa-xmark" onClick={() => setMobileNav(!mobileNav)}></i>
                <div className="mobile-links">
                    <Link onClick={() => setMobileNav(!mobileNav)} to='/categories/all'>
                        categories
                    </Link>
                    <Link onClick={() => setMobileNav(!mobileNav)} to='/categories/womens'>
                        Womens Clothing
                    </Link>
                    <Link onClick={() => setMobileNav(!mobileNav)} to='/categories/product/19'>
                        Our products
                    </Link>
                </div>
            </div>

            {/* overlay */}
            <div
                onClick={openCart}
                className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
            ></div>

            {/* cart */}
            <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
                <div className="cart-title-btn">
                    <h2 className="cart-full-h2">
                        Your Shopping Cart ({cartItem.length})
                    </h2>
                    <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
                </div>

                <div className="cart-body">
                    {cartItem.length < 1 ? (
                        <EmptyCart openCart={openCart} />
                    ) : (
                        <CartWithItems />
                    )}
                </div>
            </div>

            <nav className="navbar">
                <div className="container">
                    <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
                        <Link to='/'>
                            <img src={Logo1}
                                alt="logo"
                                onClick={scrollToTop}
                                className='logo-img' />
                        </Link>

                        <div className="nav-links">
                            <Link onClick={() => window.scrollTo(0, 0)} to='/categories/all'>
                                categories
                            </Link>
                            <Link onClick={() => window.scrollTo(0, 0)} to='/categories/product/19'>
                                our products
                            </Link>
                            <i
                                data-array-length={cartItem.length}
                                onClick={openCart}
                                className={`fa-solid fa-cart-shopping ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                                    }`}
                            ></i>
                        </div>
                        <div className="hamburger-menu">
                            <i
                                data-array-length={cartItem.length}
                                onClick={openCart}
                                className={`fa-solid fa-cart-shopping hamburger-cart ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                                    }`}
                            ></i>
                            <i
                                onClick={() => setMobileNav(!mobileNav)}
                                className="fa-solid fa-bars-staggered hamburger-hamb"
                            ></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar