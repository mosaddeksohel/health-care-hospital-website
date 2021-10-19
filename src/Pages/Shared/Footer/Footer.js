import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
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
                <Link>Home</Link> <br />
                <Link>About</Link><br />
                <Link>Services</Link><br />
                <Link>Doctors</Link><br />
                <Link>Home</Link>
            </div>
            <div className="w-25">
                <h3>Follow us on</h3>
            </div>
        </div>
    );
};

export default Footer;