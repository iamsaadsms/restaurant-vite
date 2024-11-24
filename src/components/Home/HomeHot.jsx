import React from "react";
import './HomeHot.css';
import hot from '../Media/hot2.jpg'
import d1 from '../Media/t1.png';
import d2 from '../Media/t2.png';
import Button from "../Common/Button";

const HomeHot = () => {
    return(
        <div className="HomeHot">
            <img src={hot} className="hot-img" alt="Hot Image" />
            <div className="hot-l">
                <span className="hot-dis-1">Get Upto</span>
                <span className="hot-dis-2">50%</span>
                <span className="hot-dis-3">OFF</span>
            </div>
            <div className="hot-r">
                <span className="hot-dis-r1">Hot Fresh</span>
                <span className="hot-dis-r2">HOTDOG</span>
            </div>
            <div className="hot-design">
                <img src={d1} className="hot-d" alt="Hot Design" />
                <img src={d2} className="hot-d" alt="Hot Design" />
            </div>
            <div className="hot-btn">
                <Button data={"ORDER NOW"} className="hot-button"/>
            </div>
        </div>
    )
}

export default HomeHot;