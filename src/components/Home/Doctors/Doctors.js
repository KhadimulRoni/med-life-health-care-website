import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import "./Doctors.css"

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('doctors.json')
        .then( res => res.json())
        .then(data=> setDoctors(data))
    })
    
    return (
        <div className="container pt-5">
            <div>
                <h2 className="text-primary">Our Doctors</h2>
                <h5>Your health our concern.We are always here for you.</h5>
            </div>
            <div className="row m-0 py-5">
                {
                    doctors?.map(doctor=><div
                    key={doctor.id} className="col-md-3 col-sm-12 doctor d-flex py-3">


                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={doctor.img} />
                        <Card.Body>
                            <Card.Title><h5>{doctor.name}</h5></Card.Title>
                            <Card.Text>
                                <small>Email: {doctor.email}</small>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;