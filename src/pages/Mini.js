import React, {lazy, Suspense} from 'react'

import {CllData, Eg1Data, Eg2Data, PBLData, baseUrl, sideViewUrl} from "../components/Card/MiniData";

import Box from '../components/Box/Box';
import Loading from "./Loading";
import Title from '../components/Title';

/* Lazy Load Pages */
const Card = lazy(() =>  import('../components/Card/Card'));

const Mini = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Title page="2 x 2"/>

            <Box title="CLL">
                <Card algos={CllData} baseUrl={baseUrl} />
            </Box>

            <Box title="EG-1">
                <Card algos={Eg1Data} baseUrl={baseUrl} />
            </Box>

            <Box title="EG-2">
                <Card algos={Eg2Data} baseUrl={baseUrl} />
            </Box>

            <Box title="PBL">
                <Card algos={PBLData} baseUrl={sideViewUrl}/>
            </Box>
        </Suspense>
        
    )
}

export default Mini;
