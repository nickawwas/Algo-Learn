import React from 'react'

import Card from '../components/Card/Card';
import {CllData, Eg1Data, Eg2Data, baseUrl} from "../components/Card/MiniData";

const Mini = () => {
    return (
        <>
            <Card algos={CllData} baseUrl={baseUrl}/>
            <Card algos={Eg1Data} baseUrl={baseUrl}/>
            <Card algos={Eg2Data} baseUrl={baseUrl}/>
        </>
        
    )
}

export default Mini;
