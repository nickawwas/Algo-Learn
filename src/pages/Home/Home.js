import React from 'react';
import { Helmet } from 'react-helmet';

import Container from '../../components/Container/Container'
import { ContainerSections } from '../../components/Container/ContainerData'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Algo Learn
                </title>
                <meta 
                    name="description"
                    content="Learn 2x2, 3x3, and 3-Bld Algorithms"
                />
                <meta 
                    name="keywords"
                    content="2x2 3x3 Rubik's Cube CFOP Ortega Algorithms CLL EG-1 EG-2 PBL F2L OLL PLL 3-Style Algs Cubing"
                />                
            </Helmet>
            
            <Container sections={ContainerSections}/>
        </>
    )
}

export default Home;
