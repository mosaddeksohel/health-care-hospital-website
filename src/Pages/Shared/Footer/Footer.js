import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex container mt-3">
                <div className="w-25">
                    <p>Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. Dictum, placerat massa non, bibendum ante. Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh.</p>
                </div>
                <div className="w-50">
                    <h4>Contact Us</h4>
                    <h6>Green Road, Panthopoth, Dhaka-1208</h6>
                    <h6>Monday - Sunday 08:00-19:00</h6>
                    <h6>01780000000</h6>
                </div>
                <div className="w-25">
                    <Link to="/home">Home</Link> <br />
                    <Link to="/about">About</Link><br />
                    <Link to="/services">Services</Link><br />
                    <Link to="/doctors">Doctors</Link><br />
                </div>
                <div className="w-25">
                    <h3>Follow us on</h3>

                </div>
            </div >
        </div>
    );
};

export default Footer;