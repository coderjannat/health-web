import React from 'react';
import Banner from '../Banner/Banner';

import Drugs from '../../medicines/Drugs/Drugs';

import Accondion from '../Accordion/Accondion';
import OnlineService from '../OnlineService/OnlineService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Drugs></Drugs>
            <OnlineService></OnlineService>
            <Accondion></Accondion>
           
        </div>
    );
};

export default Home;