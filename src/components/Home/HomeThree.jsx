import React, { useEffect, useState, useRef } from "react";
import './HomeThree.css';
import HThree from '../JSON/HomeThree.json';
import Button from "../Common/Button";

const importAll = (r) => {
    let images = {};
    for (const path in r) {
        images[path.replace('./', '')] = r[path];
    }
    return images;
};

const images = importAll(import.meta.glob('../Media/*.{png,jpg,jpeg,svg,webp}', { eager: true }));

const HomeThree = () => {
    const [temps, setTemps] = useState([]);
    const elementsRef = useRef([]);

    useEffect(() => {
        const tempsWithImages = HThree.map(item => ({
            ...item,
            img1: images[item.img1],
            back: images[item.back]
        }));
        setTemps(tempsWithImages);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsRef.current.forEach(el => el && observer.observe(el));

        return () => {
            if (elementsRef.current) {
                elementsRef.current.forEach(el => el && observer.unobserve(el));
            }
        };
    }, [temps]);

    const getBackgroundColor = (index) => {
        switch(index) {
            case 1:
                return '#ff6900';
            case 2:
                return '#0693e3';
            default:
                return 'rgb(0, 161, 73)';
        }
    };

    return (
        <div className="HomeThree">
            {temps.map((num, index) => (
                <div
                    className="div-three-home"
                    key={index}
                    style={{ backgroundColor: getBackgroundColor(index) }}
                    ref={el => elementsRef.current[index] = el}
                >
                    <div className="three-l-home">
                        <span className="l-home-h">{num.head}</span>
                        <span className="l-topic-h">{num.topic}</span>
                        <span className="l-phen-h">{num.phen.toUpperCase()}</span>
                        <span className="l-price-h">{num.price}</span>
                        <div className="order-btn">
                            <Button data={"Order Now"} className={"home-oder-btn"} />
                        </div>
                    </div>
                    <div className="three-r-home">
                        <img src={num.img1} className="r-home-img" alt="Order" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomeThree;
