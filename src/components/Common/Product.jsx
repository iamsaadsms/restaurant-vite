import React, { useState, useEffect } from "react";
import './Product.css';
import SideCart from "./SideCart";
import Wrapper from "./Wrapper";
import Button from "./Button";

const Product = ({ item, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [isCartActive, setIsCartActive] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return storedItems;
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        const product = {
            id: item.id,
            img: item.img,
            name: item.name,
            price: item.price,
            quantity
        };

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === product.id);
            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            }
            return [...prevItems, product];
        });

        setIsCartActive(true); // Show the SideCart
    };

    const handleUpdateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveCartItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="Product">
            <div className="headers">
                <i className="bi-cross bi-x" onClick={onClose}></i>
            </div>
            <div className="product-data">
                <img src={item.img} alt={item.name} className="img-product" />
                <div className="product-details">
                    <span className="product-name">{item.name}</span>
                    <span className="product-desc">{item.desc}</span>
                </div>
                <div className="wrapper-btn">
                    <span className="product-price">RS. {(item.price * quantity).toFixed(2)}</span>
                    <Wrapper quantity={quantity} onQuantityChange={handleQuantityChange} />
                </div>
                <div className="prod-btn">
                    <Button data={"ADD TO CART"} onClick={handleAddToCart} style={{ width: '100%' }} />
                </div>
            </div>

            <SideCart
                isActive={isCartActive}
                cartItems={cartItems}
                toggleSideCart={() => setIsCartActive(false)}
                updateCartItemQuantity={handleUpdateQuantity}
                removeCartItem={handleRemoveCartItem}
            />
        </div>
    );
};

export default Product;
