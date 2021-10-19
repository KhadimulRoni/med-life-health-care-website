import React, { useEffect, useState } from 'react';
import "./Doctors.css"

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('doctors.json')
        .then( res => res.json())
        .then(data=> setDoctors(data))
    })
    
    return (
        <div>
            <div>
                <h2>Our Doctors</h2>
            </div>
            <div className="row">
                {
                    doctors?.map(doctor=><div
                    key={doctor.id} className="col-md-4 doctor p-5">
                        <img src={doctor.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Doctors;