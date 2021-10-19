import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { img, name } = props.service;
    return (
        <div className="mx-auto">
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Service;