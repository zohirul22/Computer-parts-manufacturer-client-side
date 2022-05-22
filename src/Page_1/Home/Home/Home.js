import React from 'react';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Selling from '../Selling/Selling';
import Summary from '../Summary/Summary';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Parts></Parts>
            <Reviews></Reviews>
            <Selling></Selling>
           <Summary></Summary>  
           <Footer></Footer>
        </div>
    );
};

export default Home;