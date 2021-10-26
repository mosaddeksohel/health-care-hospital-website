import React from 'react';
import '../../images/Health-care.jpg'
import '../../images/doctor.png'
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import '../../images/depositphotos_170238576-stock-photo-confident-doctor-with-arms-crossed.jpg'
import '../../images/depositphotos_242549772-stock-photo-medical-healthcare-concept-doctor-hospital.jpg'
import '../../images/healthcare-people-group-professional-doctor-260nw-1214056192.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/depositphotos_170238576-stock-photo-confident-doctor-with-arms-crossed.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/depositphotos_242549772-stock-photo-medical-healthcare-concept-doctor-hospital.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../images/healthcare-people-group-professional-doctor-260nw-1214056192.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;