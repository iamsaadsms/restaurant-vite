import React, { useState, useEffect } from "react";
import './Navbar.css';
import Header from "./Header";
import logo from '../../Media/logo.svg';
import Navtabs from "./Navtabs";
import bike from '../../Media/bike.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [padding, setPadding] = useState('2vh 2vw');

    useEffect(() => {
        let timer;
        const handleScroll = () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                if (window.scrollY > 50) {
                    setPadding('0vh 2vw');
                } else {
                    setPadding('5vh 2vw');
                }
            }, 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timer) clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <Header />
            <div className="Navbar" style={{ padding }}>
                <div className="nav-items-tabs">
                    <Link to={'/home'} className="div-navbar-logo">
                        <div>
                            <img src={logo} className="nav-logo" alt="Logo" />
                        </div>
                    </Link>
                    <Navtabs />
                </div>
                <div className="nav-items delivery">
                    <div className="bike">
                        <img src={bike} className="bike-img" alt="bike" />
                    </div>
                    <div className="bike-data">
                        <span className="nav-call">Call and Order in</span>
                        <span className="nav-contact">+1 718-904-4450</span>
                    </div>
                </div>
                <div className="nav-items right-icons">
                    <i className="bi bi-search nav-icon"></i>
                    <i className="bi bi-person-fill nav-icon"></i>
                    <i className="bi bi-heart-fill nav-icon"></i>
                    <Link to={'/cart'} className="nav-icon-link">
                        <i className="bi bi-cart nav-icon"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
