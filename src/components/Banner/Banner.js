import React from 'react';
import { Carousel } from 'react-bootstrap';
import ban1 from '../../images/slide-1.jpg'
import ban2 from '../../images/slide-2.jpg'

const Banner = () => {
    return (
        <div className="mb-4">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'blue' }}>Your health is our Priority</h3>
                        <p style={{ color: 'skyblue' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;