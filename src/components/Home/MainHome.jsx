import React, { useEffect } from "react";
import './MainHome.css';
import back from '../Media/bg-img.jpg';
import pizza from '../Media/pizza.png';
import tomato from '../Media/tomato.png';
import shape from '../Media/shape.png';
import leaf from '../Media/leaf.png';
import Button from "../Common/Button";

const MainHome = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const pizzaElement = document.querySelector('.piz-img');
      const shapeElement = document.querySelector('.shape-img');
      const leafElement = document.querySelector('.leaf-img');

      // Add a check to disable scrolling effect on mobile (max-width: 600px)
      if (window.innerWidth > 600) {
        if (pizzaElement) {
          pizzaElement.style.transform = `translateY(${scrollTop * 0.2}px)`; // Adjust the speed here
          shapeElement.style.transform = `translateY(${scrollTop * (-0.2)}px)`;
          shapeElement.style.transform = `translateX(${scrollTop * (-0.2)}px)`;
          leafElement.style.transform = `translateY(${scrollTop * (-0.2)}px)`;
          leafElement.style.transform = `translateX(${scrollTop * (-0.2)}px)`;
        }
      } else {
        // Reset the transform styles for mobile
        if (pizzaElement) pizzaElement.style.transform = 'none';
        if (shapeElement) shapeElement.style.transform = 'none';
        if (leafElement) leafElement.style.transform = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="MainHome">
      <div className="bg-main">
        <img src={back} className="back-img" alt="Background" />
        <img src={pizza} className="piz-img" alt="Pizza" />
        <img src={shape} className="shape-img" alt="Shape" />
        <img src={tomato} className="tom-img" alt="Tomato" />
        <img src={leaf} className="leaf-img" alt="Leaf" />
      </div>
      <div className="absolute-text">
        <span className="abs-h">UNLIMITED <span className="abs-med">MEDIUM <span className="piz-h">PIZZAS</span></span></span>
        <span className="abs-s">Medium 2-topping* pizza</span>
        <span className="abs-ex">*Additional charge for premium toppings. Minimum of 2 required.</span>
        <div className="abs-btn-price">
            <Button data={"ORDER NOW"} className="abs-btn" />
            <span className="abs-new-prc">$12.99
            <span className="abs-old-prc">$19.99</span></span>
        </div>
      </div>
      <div className="abs-btn-menu" >
      <Button data={"MENUS"}  className="btn-menu"/>
      </div>
    </div>
  );
};

export default MainHome;
