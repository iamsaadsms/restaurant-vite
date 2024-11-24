import React from "react";
import './Footer.css';
import logo from '../Media/logo.svg';
import pay from '../Media/foot.png'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="f-top">
                <div className="f-top-logo">
                    <img src={logo} className="f-logo" alt="Logo" />
                </div>
                <div className="f-top-cols">
                    <div className="f-top-divs">
                        <span className="f-top-span-head">ADDRESS</span>
                        <span className="f-top-span1">570 8th Ave,</span>
                        <span className="f-top-span1">New York, NY 10018</span>
                        <span className="f-top-span1">United States</span>
                    </div>
                    <div className="f-top-divs">
                        <span className="f-top-span-head">BOOK A TABLE</span>
                        <span className="f-top-span1">Dogfood och Sliders foodtruck.</span>
                        <span className="f-top-span1">Under Om oss kan ni läsa</span>
                        <span className="f-top-cont">(850) 435-4155</span>
                    </div>
                    <div className="f-top-divs">
                        <span className="f-top-span-head">OPENING HOURS</span>
                        <span className="f-top-span1">Monday – Friday:<strong> 8am – 4pm</strong></span>
                        <span className="f-top-span1">Saturday: 9am –<strong> 5pm</strong></span>
                        <div className="f-top-socials">
                            <i className="bi bi-facebook soc-icon-foot"></i>
                            <i className="bi bi-twitter-x soc-icon-foot"></i>
                            <i className="bi bi-linkedin soc-icon-foot"></i>
                            <i className="bi bi-instagram soc-icon-foot"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-bot">
                <div className="f-bot-l">
                    <span className="f-bot-span">Copyright © 2022. All Rights Reserved.</span>
                    <span className="f-bot-conp">Developed By BackTreq.</span>
                </div>
                <div className="f-bot-r">
                    <img src={pay} className="f-img-r" alt="Foot" />
                </div>
            </div>
        </div>
    )
}

export default Footer;