import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const {service} = props ;
    /* -----destructuring------ */
    const {img,name,description} = service;
    return (
        <div className="col-md-4 col-sm-12 p-3 m-0 service">

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3 className="pt-2 text-primary">{name}</h3></Card.Title>
                    <Card.Text className="description pt-2">
                        {description}
                    </Card.Text>
                    <Link to={`/details/${service?.id}`}><button className="btn btn-primary my-3">Read More</button></Link>
                </Card.Body>
            </Card> 
  
        </div>
    );
};

export default Service;