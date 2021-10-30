import React, { useEffect, useState } from 'react';
import Service from '../../components/Service/Service';
import './serrvices.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className="text-primary">Our Services</h2>
            <div className="services mx-auto container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Services;