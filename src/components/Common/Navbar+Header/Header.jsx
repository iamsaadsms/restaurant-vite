import React from "react";
import './Header.css';

const Header = () => {
    return(
        <div className="Header">
            <div className="l-header">
                <span className="l-part">CALL US: 021 111 333 555</span>
                <span className="lpart"><i className="bi bi-geo-alt loc-icon"></i>72 Madison Avenue</span>
            </div>
            <div className="r-header">
                <span className="r-part"><i className="bi bi-facebook"></i></span>
                <span className="r-part"><i className="bi bi-linkedin"></i></span>
                <span className="r-part"><i className="bi bi-instagram"></i></span>
                <span className="r-part"><i className="bi bi-twitter-x"></i></span>
            </div>
        </div>
    )
}

export default Header;