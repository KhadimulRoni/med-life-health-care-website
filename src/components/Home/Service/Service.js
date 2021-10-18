import React from 'react';
import "./Service.css"

const Service = (props) => {
    const {service} = props ;
    /* -----destructuring------ */
    const {img,name,description} = service;
    return (
        <div className="col-md-4 p-4">
            <div className="service">
                <img src={img} alt="" />
                <h3 className="pt-2 text-primary">{name}</h3>
                <p>{description}</p>
                <button className="btn btn-primary my-3">Read More</button>  
            </div>   
        </div>
    );
};

export default Service;