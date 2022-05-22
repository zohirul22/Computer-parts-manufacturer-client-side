import React from 'react';
import Bannar from '../Bannar/Bannar';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Parts></Parts>
            <Reviews></Reviews>
           <Summary></Summary> 
        </div>
    );
};

export default Home;