import React, { useState } from 'react';
import './PopularItems.css';
import Product from './Product';

const PopularItems = ({ modules }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleItemClick = (item) => {
        setSelectedProduct(item);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="popular-items">
            {modules.length > 0 ? (
                modules.map((item, index) => (
                    <div className="popular-data" key={index} onClick={() => handleItemClick(item)}>
                        <div className="popular-img">
                            {item.img ? (
                                <img src={item.img} className="p-img" alt={item.name} />
                            ) : (
                                <div>No Image Available</div>
                            )}
                            <i className="bi bi-heart-fill pop-heart"></i>
                        </div>
                        <div className="popular-details">
                            <span className="p-name">{item.name}</span>
                            <span className="p-desc">{item.desc}</span>
                            <div className="popular-pricing">
                                <span className="p-price">{item.price}</span>
                                <i className="bi bi-cart pop-icon"></i>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No items found for this category.</div>
            )}

            {selectedProduct && (
                <div className="product-overlay">
                    <Product item={selectedProduct} onClose={handleClose} />
                </div>
            )}
        </div>
    );
};

export default PopularItems;
