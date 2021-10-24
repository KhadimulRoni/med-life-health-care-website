import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './singleServiceDetails.css'



const SingleServiceDetails = () => {
    let {id} = useParams(); 

    const [singleDetails, setSingleDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    console.log(singleService)

    useEffect( ()=>{
        fetch('/singleServiceDetails.json')
        .then(res => res.json())
        .then(data => setSingleDetails(data?.service));
        
    },[])

    useEffect( ()=>{
        const foundService = singleDetails.find(service => service?.id == id)
        setSingleService(foundService)

    },[singleDetails,id])


    return (
        <div className="single">
            <div className="container p-5">
                <img src={singleService?.img} alt="" />
                {/* <h2>Service ID: {id}</h2> */}
                <h2 className="text-warning p-3">{singleService?.name}</h2>
                <h4 className="text-info">Available Doctors : {singleService?.doctors}</h4>
                <p className="p-3 text-light">{singleService?.description}</p>
            </div>
        </div>
    );
};

export default SingleServiceDetails;