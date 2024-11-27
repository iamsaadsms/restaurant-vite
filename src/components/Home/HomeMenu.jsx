import React, { useEffect, useState } from "react";
import './HomeMenu.css';
import HMenu from '../JSON/HomeMenu.json';

// Import images dynamically
const images = import.meta.glob('../../assets/cat/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const HomeMenu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsArray = Object.values(HMenu);

        const loadImages = () => {
            const itemsWithImages = itemsArray.map(item => {
                const imgPath = images[`../../assets/cat/${item.img}`];
                return {
                    ...item,
                    img: imgPath?.default || imgPath, // Get resolved URL
                };
            });
            setItems(itemsWithImages);
        };

        loadImages();
    }, []);

    return (
        <div className="HomeMenu">
            {items.map((sub, index) => (
                <div className="menu-flex" key={index}>
                    <img src={sub.img} className="menu-img-home" alt="Menu" />
                    <div className="menu-name-home">
                        <span className="menu-span-home">{sub.name.toUpperCase()}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeMenu;
