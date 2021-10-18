import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
    return (
        <div>
            <h2>Service details id:{serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;