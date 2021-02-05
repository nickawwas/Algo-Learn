import React from 'react'

import Card from '../components/Card/Card';
import {CllData, Eg1Data, Eg2Data, baseUrl} from "../components/Card/MiniData";
import Box from '../components/Box/Box';

const Mini = () => {
    return (
        <>
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
        </>
        
    )
}

export default Mini;
