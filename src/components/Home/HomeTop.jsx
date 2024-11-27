import React, { useEffect, useState } from "react";
import './HomeTop.css';
import HTop from '../JSON/Top.json';
import top from '../Media/cat/cat1.png';

const images = import.meta.glob('../../assets/cat/*.{png,svg,webp,jpeg,jpg}', { eager: true });

const mapImages = () => {
  const mappedImages = {};
  for (const path in images) {
    const fileName = path.split('/').pop(); // Extract file name
    mappedImages[fileName] = images[path].default || images[path]; // Adjust based on Vite import structure
  }
  return mappedImages;
};

const importedImages = mapImages();

const HomeTop = () => {
  const [mods, setMods] = useState([]);

  useEffect(() => {
    const modWithImages = HTop.map(item => ({
      ...item,
      img: importedImages[item.img]
    }));
    setMods(modWithImages);
  }, []);

  return (
    <div className="HomeTop">
      <div className="top-l">
        <div className="top-head">
          <span className="top-h">Top Recipes</span>
        </div>
        <div className="top-cards">
          {mods.map((num, index) => (
            <div className="top-card-elements" key={index}>
              <div className="top-card-img">
                <img src={num.img} className="top-img" alt="Top Image" />
              </div>
              <div className="top-data">
                <span className="top-name">{num.name}</span>
                <span className="top-type">{num.type}</span>
                <span className="top-price">{num.price}</span>
                <div className="top-cart">
                  <i className="bi bi-cart top-cart-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="top-r">
        <img src={top} className="img-top-r" alt="Image" />
        <div className="top-r-data">
          <span className="top-r-h1">Super Delicious</span>
          <span className="top-r-h2">CHICKEN</span>
          <span className="top-r-h3">CALL US NOW:</span>
          <span className="top-r-h4">1-800-555-333</span>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
