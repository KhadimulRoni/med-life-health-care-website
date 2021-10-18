import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]) ;

    useEffect( () => {
        fetch('services.json')
        .then( res => res.json())
        .then( data => setServices(data));
    },[])



    return (
        <div>
            <div className="py-5 m-0">
                    <h3 className="text-primary">Medical Services</h3>
                    <h2>Our Healthcare Service</h2>
                    <h6 className="text-info p-2">Your health our concern.We care about your health.Come to us for best care of your health.</h6>
            </div> 
            <div className="container">
                <div className="row m-0">
                        {
                            services?.map(service => <Service
                            key={service.id}
                            service = {service}
                            ></Service>)
                        }
                        
                </div>
            </div>
        </div>
    );
};

export default Services;