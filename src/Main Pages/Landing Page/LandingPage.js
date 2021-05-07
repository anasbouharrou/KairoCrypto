import React from 'react';
import CallToAction from './LandingPageComponents/CallToAction.js';
import Features from './LandingPageComponents/Features.js';
import Stats from './LandingPageComponents/Stats.js';
import Pricing from './LandingPageComponents/Pricing.js';
import Footer from './LandingPageComponents/Footer.js';
import Header from './LandingPageComponents/Header.js';

const LandingPage = () => {
    return(
        <>
        <div className="LandingPage">
            <Header />
            <CallToAction />
            <Features />
            <Stats className="stats"/>
            <Pricing />
        </div>
        <Footer />
        </>
    );
}

export default LandingPage;