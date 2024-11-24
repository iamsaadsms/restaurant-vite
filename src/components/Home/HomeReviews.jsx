import React from "react";
import Slider from "react-slick";
import './HomeReviews.css';
import HReviews from '../JSON/Reviews.json';
import { FaStar } from 'react-icons/fa';

const HomeReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,  // Set to 600px
                settings: {
                    slidesToShow: 1, // Show only 1 review at a time
                    slidesToScroll: 1,
                    dots: true, // Keep the dots for navigation
                }
            }
        ]
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} color={index < rating ? "#FFD700" : "#e4e5e9"} />
        ));
    };

    return (
        <div className="HomeReviews">
            <span className="hr-head">What Our Customers Say</span>
            <div className="slider-container">
                <Slider {...settings} className="slider-rev">
                    {HReviews.map((sub, index) => (
                        <div key={index} className='slide-wrapper'>
                            <div className='slide-content'>
                                <div className="slide-data">
                                    <span className='sl-name'>{sub.name.toUpperCase()}</span>
                                    <span className='sl-stars'>{renderStars(sub.stars)}</span>
                                </div>
                                <div className='slide-review'>
                                    <span className='sl-review'>"{sub.review}"</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HomeReviews;
