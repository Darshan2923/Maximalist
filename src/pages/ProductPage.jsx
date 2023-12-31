import React, { createContext, useContext, useState } from 'react'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Trending from '../components/Trending'
import { items } from '../components/FullData'
import { useParams } from 'react-router-dom'
import '../styles/ProductPage.css'

// for cart items-------last me daala
export const CartContext = createContext();
//  ---------------------

const ProductPage = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const item = items.filter((item) => item.id === parseInt(id));



    // for cart items-------last me daala
    const [image, setImage] = useState(item[0].img);

    const { addCart } = useContext(CartContext);

    const changeImage = (e) => {
        setImage(e.target.src);
    };
    // ------------------------

    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calcPrice = (quantity) => {
        return quantity * item[0].price;
    };


    // for cart items-------last me daala
    const [notify, setNotify] = useState(false);
    const showNotify = () => {
        setNotify(!notify);
    };
    //-------------------------

    return (
        <>
            {/* for cart items-------last me daala */}
            <div className={`notify ${notify ? "slide-in" : ""}`}
                onAnimationEnd={() => setNotify(false)}
            >
                <p>Item has been added to the cart &nbsp; ✅</p>
            </div>
            {/* ------------------------------ */}

            <div className="product-page-div">
                <div className="container">
                    <div className="product-div">
                        <h3 className="product-big-name">{item[0].description}</h3>
                        <div className="product-left">
                            <div className="big-img">
                                <img src={item[0].img} alt="product" />
                            </div>
                        </div>
                        <div className="product-right">
                            <p className="product-spec">{item[0].specs}</p>
                            <div className="product-quant">
                                <p>Quantity</p>
                                <div className="product-btns">
                                    <button onClick={decrease}>-</button>
                                    <p className="quantity">{quantity}</p>
                                    <button onClick={increase}>+</button>
                                </div>
                                <p className="product-price">{calcPrice(quantity)}.00₹</p>
                            </div>
                            <div className="atc-buy">
                                <button
                                    onClick={() => {
                                        addCart(item[0]);
                                        showNotify();
                                    }}
                                    className="atc-btn">
                                    add to cart
                                </button>
                                <button className="buy-btn">buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className="specifications">
                        <div className="spec">
                            <p className="spec-title">Texture:</p>
                            <p className="title-desc">{item[0].texture}</p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Rating:</p>
                            <p className="title-desc">{item[0].rating.rate}/5 ⭐</p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">In stock:</p>
                            <p className="title-desc">{item[0].rating.count}</p>
                        </div>
                    </div>
                </div>
                <Trending />
                <Newsletter />
                <Footer />
            </div>
        </>
    )
}

export default ProductPage