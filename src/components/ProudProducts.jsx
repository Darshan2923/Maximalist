import React from 'react'
import ProductItem from './ProductItem'

const ProudProducts = () => {
    return (
        <div className='proud-container'>
            <h2 className="container proud-h2">Products we are proud of</h2>
            <div className="container">
                <div className="products-grid">
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default ProudProducts