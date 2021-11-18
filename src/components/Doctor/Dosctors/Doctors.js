import React from 'react';
import { Card } from 'react-bootstrap';

const Doctors = (props) => {
    const { name, img, designation } = props.dt;
    return (
        <div className="container">
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img style={{ height: '350px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {designation}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Doctors;