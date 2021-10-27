import React, { useEffect, useState } from 'react';
import displayDoctor from './displayDoctor';

const Doctor = () => {
    const [doctor, setDoctor] = useState({})
    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))

    }, [])
    return (
        <div>
            <h3>Our Doctor</h3>
            <div className="">
                {
                    doctor.map(doctor => <displayDoctor
                        doctor={doctor}
                        key={doctor.name}
                    ></displayDoctor>)
                }
            </div>
        </div>
    );
};

export default Doctor;