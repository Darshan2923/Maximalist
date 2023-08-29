import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/CategoriesHeader.css'

const CategoriesHeader = () => {
    const [btnName, setBtnName] = useState('All')

    const handleBtnName = (e) => {
        setBtnName(e);
    }

    return (
        <>
            <div className="container">
                <div className="catego-header">
                    <div className="title-home">
                        <Link onClick={() => window.scrollTo(0, 0)} to='/'>
                            <i className="fa-solid fa-angle-left"></i>Home
                        </Link>
                        <h3>{btnName}</h3>
                    </div>
                    <div className="filter-btns">
                        <Link to='all' onClick={() => handleBtnName("all")}>
                            <button>All</button>
                        </Link>
                        <Link to='mens' onClick={() => handleBtnName("mens collection")}>
                            <button>Men's Wear</button>
                        </Link>
                        <Link to='womens' onClick={() => handleBtnName("womens collection")}>
                            <button>Women's Wear</button>
                        </Link>
                        <Link to='jewellery' onClick={() => handleBtnName("jewellery")}>
                            <button>Jewellery</button>
                        </Link>
                        <Link to='electronics' onClick={() => handleBtnName("electronics")}>
                            <button>Electronics</button>
                        </Link>
                        <Link to='skin-care' onClick={() => handleBtnName("skin care")}>
                            <button>SkinCare</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesHeader