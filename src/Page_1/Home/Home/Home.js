import React from 'react';
import Bannar from '../Bannar/Bannar';
import Contract from '../Contract/Contract';
import Footer from '../Footer/Footer';

import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Selling from '../Selling/Selling';
import Services from '../Services/Services';
import Summary from '../Summary/Summary';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Parts></Parts>
            <Reviews></Reviews>
            <Selling></Selling>
            <Summary></Summary>
            <Contract></Contract>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;