import React, {lazy, Suspense} from 'react'

import {CllData, Eg1Data, Eg2Data, baseUrl} from "../components/Card/MiniData";
import Box from '../components/Box/Box';
import Loading from "./Loading";

/* Lazy Load Pages */
const Card = lazy(() =>  import('../components/Card/Card'));
//import Card from '../components/Card/Card';

const Mini = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Box title="CLL">
                <Card algos={CllData} baseUrl={baseUrl}/>
            </Box>

            <Box title="EG-1">
                <Card algos={Eg1Data} baseUrl={baseUrl}/>
            </Box>

            <Box title="EG-2">
                <Card algos={Eg2Data} baseUrl={baseUrl}/>
            </Box>

            <Box title="PBL">
                In Progress
            </Box>
        </Suspense>
        
    )
}

export default Mini;
