import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name, id, description } = service;
    return (

        <div className="container">
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ textAlign: 'justify' }}>
                            {description}
                        </Card.Text>
                        <Button style={{ textDecoration: 'none', width: '70%' }} variant="warning"><Link style={{ textDecoration: 'none' }} to={`/appoinment/${id}`}>Appoinment</Link></Button>
                    </Card.Body>
                </Card>
            </div>
        </div >


    );
};

export default Service;