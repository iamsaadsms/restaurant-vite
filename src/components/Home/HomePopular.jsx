import React, { useEffect, useState } from "react";
import './HomePopular.css';
import HPopular from '../JSON/HomePopular.json';
import Button from "../Common/Button";
import PopularItems from '../Common/PopularItems';

const HomePopular = () => {
    const popularTabs = [
        { tab: "pizza" },
        { tab: "sushi" },
        { tab: "salads" },
        { tab: "burger" },
        { tab: "dessert" }
    ];

    const [popTab, setPopTab] = useState(popularTabs[0].tab);
    const [modules, setModules] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Dynamically import images using import.meta.glob
    const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp}');

    useEffect(() => {
        const selectedCategory = popTab === "ALL"
            ? Object.values(HPopular[0]).flat()
            : HPopular[0][popTab];

        if (selectedCategory) {
            Promise.all(
                selectedCategory.map(async (item) => {
                    const imgPath = `../../assets/${item.img}`;
                    console.log("Checking image path: ", imgPath);  // Debugging the image path
                    const imageModule = images[imgPath];
                    if (imageModule) {
                        const image = await imageModule();
                        console.log("Loaded image: ", image.default);  // Debugging image loading
                        return {
                            ...item,
                            img: image.default,  // Use the default export for the image
                        };
                    } else {
                        console.log("Image not found for: ", imgPath);  // Debugging missing image
                        return {
                            ...item,
                            img: '',  // Fallback if image is not found
                        };
                    }
                })
            ).then(setModules);
        }
    }, [popTab, images]);

    const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="HomePopular">
            <div className="popular-head">
                <span className="hp-h">Popular Dishes</span>
            </div>
            
            <div className="tabs-container">
                <button className="tabs-dropdown-button" onClick={handleDropdownToggle}>
                    {popTab.toUpperCase()}<i className="bi bi-chevron-down down"></i>
                </button>
                
                {isDropdownOpen && (
                    <div className="tabs-dropdown">
                        {popularTabs.map((sub, key) => (
                            <div
                                className={`tabs-popular ${popTab === sub.tab ? 'active' : ''}`}
                                key={key}
                                onClick={() => { setPopTab(sub.tab); setIsDropdownOpen(false); }}
                            >
                                <span className="tabs-btn">{sub.tab.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="tabs-normal">
                    {popularTabs.map((sub, key) => (
                        <div
                            className={`tabs-popular ${popTab === sub.tab ? 'active' : ''}`}
                            key={key}
                            onClick={() => setPopTab(sub.tab)}
                        >
                            <span className="tabs-btn">{sub.tab.toUpperCase()}</span>
                        </div>
                    ))}
                </div>
            </div>

            <PopularItems modules={modules} />
            <div className="popular-btn">
                <Button data={"ALL PRODUCTS"} />
            </div>
        </div>
    );
};

export default HomePopular;
