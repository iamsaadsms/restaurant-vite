import React, { useEffect, useState } from "react";
import './HomePop.css';
import HPop from '../JSON/HomePop.json';

// Dynamically import images using import.meta.glob
const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp}');

const HomePop = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const elementsArray = Object.values(HPop);

            // Map through elements and load images dynamically
            const elementsWithImages = await Promise.all(
                elementsArray.map(async (item) => {
                    // Define image paths based on JSON keys
                    const imgPath = `../../assets/${item.img}`;
                    const circlePath = `../../assets/${item.circle}`;

                    // Try to find the image and circle using import.meta.glob
                    const imgModule = images[imgPath];
                    const circleModule = images[circlePath];

                    let img = '';
                    let circle = '';

                    // Dynamically import images if they exist
                    if (imgModule) {
                        const imgLoaded = await imgModule();
                        img = imgLoaded.default; // Use the default export for the image
                    }

                    if (circleModule) {
                        const circleLoaded = await circleModule();
                        circle = circleLoaded.default; // Use the default export for the circle image
                    }

                    return {
                        ...item,
                        img,
                        circle
                    };
                })
            );

            setElements(elementsWithImages);
        };

        loadImages();
    }, []); // Empty dependency array ensures this runs once after component mounts

    return (
        <div className="HomePop">
            {elements.map((num, index) => (
                <div className="pop-set" key={index}>
                    <div className="pop-data">
                        <div className="pop-data-l">
                            <span className="pop-data-h">{num.head}</span>
                            <span className="pop-data-sub">
                                {num.sub.split("\\n").map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line.toUpperCase()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </span>
                            <span className="pop-data-last">{num.last}</span>
                        </div>
                        <div className="pop-data-r">
                            {num.img ? (
                                <img src={num.img} className="pop-data-img" alt="Pop Image" />
                            ) : (
                                <p>No image available</p>  // Fallback if image is missing
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePop;
