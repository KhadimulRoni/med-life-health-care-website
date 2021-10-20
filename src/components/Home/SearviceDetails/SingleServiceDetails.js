import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import image from "../../../images/banner/adam-niescioruk-hWzrJsS8gwI-unsplash.jpg"

const SingleServiceDetails = () => {
    let {serviceId} = useParams();

    const [singleDetails, setSingleDetails] = useState([]);

    const [serviceDetail, setServiceDetail] = useState({});

    useEffect( ()=>{
        fetch('/singleServiceDetails.json')
        .then(res => res.json())
        .then(data => setSingleDetails(data))
    },[])

    useEffect(()=>{
        const singleService = singleDetails.find(data => data?.id === serviceId)
        console.log(singleService)

    },[ singleDetails ]);


    return (
        <div>
            <h2>Service ID: {serviceId}</h2>
            <h1 className="text-warning">Page is under construction</h1>
            <img style={{width:"100%"}} src={image} alt="" />
            

        </div>
    );
};

export default SingleServiceDetails;