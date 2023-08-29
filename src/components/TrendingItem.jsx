import React from 'react'
import { items } from './FullData'
import { Link } from 'react-router-dom';
import '../styles/Trending.css'

const TrendingItem = () => {
    const filteredItems = items.filter((item) => item.id >= 8);
    return (
        <>
            {filteredItems.map((item) => (
                <div className="row-item" key={item.id}>
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to={`/categories/product/${item.id}`}>
                        <div className="item-header">
                            <img src={item.img} alt="product" />
                        </div>
                        <div className="item-description">
                            <p>{item.description}</p>
                            <p className="item-price">{item.price}₹</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default TrendingItem