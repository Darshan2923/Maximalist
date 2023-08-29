import React from 'react'
import { items } from '../FullData'
import { Link } from 'react-router-dom';

const CategoriesJewellery = () => {
    const filteredJewellery = items.filter((item) => item.category == "jewellery");
    return (
        <>
            <div className="proud-container">
                <div className="container">
                    <div className="products-grid">
                        {filteredJewellery.map((item) => (
                            <div key={item.id} className="product normal">
                                <Link
                                    onClick={() => window.top(0, 0)}
                                    to={`/categories/product/${item.id}`}
                                >
                                    <div className="product-header">
                                        <img src={item.img} alt="product1" />
                                    </div>
                                    <div className="product-details">
                                        <p>{item.description}</p>
                                        <p className="item-price">{item.price}$</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesJewellery