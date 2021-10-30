import React, { useEffect, useState } from 'react';
import Doctors from '../Dosctors/Doctors';



const Doctor = () => {
    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    return (
        <div>
            <h3 className="text-primary mt-5 mx-auto">Our Doctors</h3>
            <div className="services container">

                {
                    doctor.map(dt => <Doctors
                        key={dt.id}
                        dt={dt}
                    ></Doctors>)
                }

            </div>
        </div >
    );
};

export default Doctor;