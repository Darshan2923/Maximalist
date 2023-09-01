import React, { useEffect, useState } from 'react'
import { CartContext } from '../pages/ProductPage'

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);
    const { cartItem, setCartItem } = useContext(CartContext);

    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };
    const decrease = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    };

    const calcPrice = (quantity, item) => {
        return quantity * item;
    }

    const [deleteItem, setDeleteItem] = useState(cartItem);

    const removeCart = (id) => {
        const updateCart = cartItem.filter((item) => item.id !== id);
        setDeleteItem(updateCart);
        const json = JSON.stringify(cartItem.id);
        localStorage.removeItem("cartItem", json);
    }

    useEffect(() => {
        setCartItem(deleteItem);
    }, [deleteItem, setCartItem]);

    return (
        <>
            {cartItem.map((item, id) => (
                <div className="cart-item" key={id}>
                    <div className="cart-img">
                        <img src={item.img} alt="product" />
                    </div>
                    <div className="cart-middle">
                        <p className="cart-name">{item.description}</p>
                        <div className="cart-btns">
                            <button onClick={decrease}>-</button>
                            <p className="quantity">{quantity}</p>
                            <button onClick={increase}>+</button>
                        </div>
                    </div>
                    <div className="cart-right">
                        <p className="cart-price">{calcPrice(quantity, item.price)}.00₹</p>
                        <i className="fa-sharp fa-solid fa-xmark"
                            onClick={() => removeCart(item.id)}></i>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartItem