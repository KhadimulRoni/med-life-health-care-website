import { useParams } from 'react-router';
import image from "../../../images/banner/adam-niescioruk-hWzrJsS8gwI-unsplash.jpg"

const SingleServiceDetails = () => {
    const {serviceId} = useParams();
    
    return (
        <div>
            <h2>Service ID: {serviceId}</h2>
            <h1 className="text-warning">Page is under construction</h1>
            <img style={{width:"100%"}} src={image} alt="" />
            

        </div>
    );
};

export default SingleServiceDetails;