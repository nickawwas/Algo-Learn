import React from 'react'

import Card from '../components/Card/Card';
import {CllData, baseUrl} from "../components/Card/CllData";

const Mini = () => {
    return (
        <Card algos={CllData} baseUrl={baseUrl}/>
    )
}

export default Mini;
