import React, { useEffect, useState } from "react";
import './HomePop.css';
import HPop from '../JSON/HomePop.json';

const images = import.meta.glob('../../assets/pops/*.{png,jpg,jpeg,webp,svg}', { eager: true });

const mapImages = () => {
  const mappedImages = {};
  for (const path in images) {
    const fileName = path.split('/').pop(); // Extract the file name
    mappedImages[fileName] = images[path].default || images[path]; // Adjust depending on how Vite handles imports
  }
  return mappedImages;
};

const importedImages = mapImages();

const HomePop = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const elementsArray = Object.values(HPop);
    const elementsWithImages = elementsArray.map(item => ({
      ...item,
      img: importedImages[item.img],
      circle: importedImages[item.circle]
    }));
    setElements(elementsWithImages);
  }, []);

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
              <img src={num.img} className="pop-data-img" alt="Pop Image" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePop;
