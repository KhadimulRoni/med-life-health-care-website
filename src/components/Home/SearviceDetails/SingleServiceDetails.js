import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const SingleServiceDetails = (props) => {
    const {serviceId} = useParams();
    

    useEffect( () =>{
        fetch(`singleServiceDetails.json${serviceId}`)
        .then( res => res.json())
        .then( data =>console.log(data));
    },[]);
    return (
        <div>
            <h2>{serviceId}</h2>
        </div>
    );
};

export default SingleServiceDetails;