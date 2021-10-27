import React from 'react';
import { Card } from 'react-bootstrap';

const displayDoctor = (props) => {
    const { name, img, designation } = props.doctor;
    return (
        <div>
            <div>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {designation}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default displayDoctor;