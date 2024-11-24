import React from "react";
import './Home.css';
import MainHome from "./MainHome";
import HomeMenu from "./HomeMenu";
import HomePop from "./HomePop";
import HomePopular from "./HomePopular";
import HomeHot from "./HomeHot";
import HomeTop from "./HomeTop";
import HomeReviews from "./HomeReviews";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeThree from "./HomeThree";


const Home = () => {
    let hBtn = {
        backgroundColor: "rgb(255, 194, 34)"
    }
    return(
        <div className="Home">
            <MainHome />
            <HomeMenu />
            <HomePop />
            <HomePopular />
            <HomeHot />
            <HomeTop />
            <HomeReviews />
            <HomeThree />
        </div>
    )
}

export default Home;