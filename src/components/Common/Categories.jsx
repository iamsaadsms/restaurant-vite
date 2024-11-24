import React, { useState, useEffect } from "react";
import './Categories.css';
import ShopJSON from '../JSON/Shop.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faLeaf, faBurger, faFish } from '@fortawesome/free-solid-svg-icons';
import PopularItems from "./PopularItems";

// Dynamically import images using Vite's import.meta.glob
const importAll = (r) => {
    let images = {};
    for (const path in r) {
        images[path.replace('./', '')] = r[path];
    }
    return images;
};

// Dynamically import images using import.meta.glob
const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp}');

const iconMap = {
    pizza: <FontAwesomeIcon icon={faPizzaSlice} />,
    sushi: <FontAwesomeIcon icon={faFish} />,
    salads: <FontAwesomeIcon icon={faLeaf} />,
    burger: <FontAwesomeIcon icon={faBurger} />,
    dessert: <i className="bi bi-cake"></i>
};

const Categories = () => {
    const [things, setThings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('pizza');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            // Flatten and set categories with images
            const thingsArray = Object.values(ShopJSON);
            const thingsWithImages = await Promise.all(
                thingsArray.flatMap(async item => {
                    return await Promise.all(
                        Object.entries(item).map(async ([key, value]) => {
                            const itemsWithImages = await Promise.all(value.map(async (v) => {
                                const imgPath = `../../assets/${v.img}`;
                                console.log("Checking image path: ", imgPath);  // Debugging the image path
                                const imageModule = images[imgPath];
                                if (imageModule) {
                                    const image = await imageModule();  // Wait for the image to load
                                    console.log("Loaded image: ", image.default);  // Debugging image loading
                                    return {
                                        ...v,
                                        img: image.default,  // Use the default export for the image
                                    };
                                } else {
                                    console.log("Image not found for: ", imgPath);  // Debugging missing image
                                    return {
                                        ...v,
                                        img: '',  // Fallback if image is not found
                                    };
                                }
                            }));
                            return { key, items: itemsWithImages };
                        })
                    );
                })
            );
            setThings(thingsWithImages.flat());
        };

        loadImages();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsSidebarOpen(false); // Close sidebar when a category is selected
    };

    const filteredItems = things.find(thing => thing.key === selectedCategory)?.items || [];

    return (
        <div className="cat-top">
            <div className="fil-btn">
                <span className="filter-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <i className="bi bi-filter filter-icon"></i> Filter
                </span>
            </div>
            <PopularItems modules={filteredItems} />
            <div className={`Categories ${isSidebarOpen ? "open" : ""}`}>
                <span className="cat-head">
                    Categories
                    <i className="bi bi-x close-icon" onClick={() => setIsSidebarOpen(false)}></i>
                </span>
                {things.length > 0 ? (
                    <div className="cat-elements">
                        {things.map(({ key, items }) => (
                            <div key={key} className="cat-items" onClick={() => handleCategoryClick(key)}>
                                <div className="category-icon">
                                    <span className="cat-icon">{iconMap[key]}</span>
                                    <span className="cat-n">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading categories...</p> // Add a loading message or spinner
                )}
            </div>
        </div>
    );
};

export default Categories;
