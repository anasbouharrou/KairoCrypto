import React from 'react';
import CallToAction from './LandingPageComponents/CallToAction.js';
import Features from './LandingPageComponents/Features.js';
import Stats from './LandingPageComponents/Stats.js';
import Pricing from './LandingPageComponents/Pricing.js';
import Footer from './LandingPageComponents/Footer.js';
import Header from './LandingPageComponents/Header.js';
import FeaturesCollumn from './LandingPageComponents/FeaturesCollumn.js';
import Testamontials from './LandingPageComponents/Testamontials.js';
import Faq from './LandingPageComponents/Faq.js';


const LandingPage = () => {
    return(
        <>
            <div className="LandingPage" >
                <Header />
                <CallToAction />
                <Features />
                <FeaturesCollumn />
                <Testamontials />
                <Stats className="stats"/>
                <Pricing />
                <Faq />
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;