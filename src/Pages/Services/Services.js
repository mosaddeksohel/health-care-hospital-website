import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
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
            <h2>Our Services</h2>
            <div className="services">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>).slice(0, 6)
                }

            </div>

        </div>
    );
};

export default Services;