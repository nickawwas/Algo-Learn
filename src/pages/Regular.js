import React from 'react';

import Card from '../components/Card/Card';
import {baseUrl} from "../components/Card/CardData";
import {ollAlgs, pllAlgs} from "../components/Card/regularData";

const Regular = () => {
    return (
        <>
            <Card algos={ollAlgs} baseUrl={baseUrl}/>
            <Card algos={pllAlgs} baseUrl={baseUrl}/>
        </>
    )
}

export default Regular;
