import React from 'react';
import "./Banner.css";
import banner from "../../../images/banner/doctor-with-co-workers-analyzing-x-ray.jpg";

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;