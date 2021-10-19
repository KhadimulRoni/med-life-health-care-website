import React from 'react';
import logo from "../../../logo.png"

const About = () => {
    return (
        <div className="container">
            <h2 className="text-primary">About us</h2>
            <div className="pt-5">
                <img src={logo} alt="" />
                <p className="py-5 px-5">The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable. Health care must focus on creating social profit to fulfill its promise to society.The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable. Health care must focus on creating social profit to fulfill its promise to society.Basic health services means those health services, including as a minimum, but not limited to, emergency care, inpatient hospital and physician care, ambulatory physician care, and outpatient and preventive medical services.High-quality health care helps prevent diseases and improve quality of life. ... Helping health care providers communicate more effectively can help improve health and well-being. Strategies to make sure health care providers are aware of treatment guidelines and recommended services are also key to improving health.</p>
            </div>
        </div>
    );
};

export default About;