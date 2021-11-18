import React from 'react';
import Services from '../../Pages/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor/Doctor';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            <About></About>
        </div>
    );
};

export default Home;