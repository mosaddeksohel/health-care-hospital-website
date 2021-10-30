import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, name, text, id } = props.service;
    return (
        <div className="mx-auto">
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                        <Button variant="warning"><Link to={`/appoinment/${id}`}>Appoinment</Link></Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Service;