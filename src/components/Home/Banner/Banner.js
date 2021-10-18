import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";
import banner1 from "../../../images/banner/doctor-with-co-workers-analyzing-x-ray.jpg";
import banner2 from "../../../images/banner/asian-young-main-group-hospital-professional.jpg";
import banner3 from "../../../images/banner/successful-medical-team.jpg";

const Banner = () => {
    return (
        
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="title-1">Health is Wealth</h1>
                    <h3 className="title-2">We Provide Best Medical & Healthcare Service For Your Family</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="title-1">Second slide label</h1>
                    <h3 className="title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="title-1">Third slide label</h1>
                    <h3 className="title-2">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;