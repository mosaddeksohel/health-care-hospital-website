import React from 'react';
import '../../images/Health-care.jpg'
import '../../images/doctor.png'
import './Banner.css'
import Services from '../Services/Services';

const Banner = () => {
    return (

        <div className="banner">

            <div className="">
                <div>
                    <h2 className="dark pt-3">Helping You</h2>
                    <h2 className="warning">Stay Happy</h2>
                </div>
                <div>
                    <img src="../../images/doctor.png" alt="" />
                </div>
                <Services></Services>
            </div>
        </div >

    );
};

export default Banner;