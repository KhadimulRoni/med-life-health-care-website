import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import image from "../../../images/banner/adam-niescioruk-hWzrJsS8gwI-unsplash.jpg"

const SingleServiceDetails = (props) => {
    const {serviceId} = useParams();
    

    useEffect( () =>{
        fetch(`singleServiceDetails.json${serviceId}`)
        .then( res => res.json())
        .then( data =>console.log(data));
    },[]);
    return (
        <div>
            <h2>Service ID: {serviceId}</h2>
            <img src={image} alt="" />
            

        </div>
    );
};

export default SingleServiceDetails;