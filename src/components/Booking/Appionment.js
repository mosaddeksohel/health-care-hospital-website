import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../useFirebase/useAuth';

const Appionment = () => {
    const { appionmentId } = useParams();
    const [service, setService] = useState({})
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {

                const p = data.find(p => p.id == appionmentId)
                setService(p)
            })

    }, [appionmentId])

    return (
        <>
            {
                <div className="item"
                    style={{ marginLeft: '5rem' }}
                >

                    <div>
                        <Card style={{ width: '22rem' }}>
                            <Card.Img style={{ height: '250px' }} variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text style={{ textAlign: 'justify' }}>
                                    {service.description}
                                </Card.Text>
                                <Button>Book Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    {
                        isLoading && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }

                </div >
            }
        </>
    );

};

export default Appionment;