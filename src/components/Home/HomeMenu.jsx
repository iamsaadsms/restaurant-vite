import React, { useEffect, useState } from "react";
import './HomeMenu.css';
import HMenu from '../JSON/HomeMenu.json';

// Import images dynamically using Vite's import.meta.glob
const importAll = (r) => {
    let images = {};
    for (const path in r) {
        images[path.replace('./', '')] = r[path];
    }
    return images;
}

// Using import.meta.glob to import images from the Media/cat directory
const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp}');

const HomeMenu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsArray = Object.values(HMenu);
        const itemsWithImages = itemsArray.map(item => ({
            ...item,
            img: images[item.img]
        }));
        setItems(itemsWithImages);
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
    )
}

export default HomeMenu;
