import React from 'react'

import Card from '../components/Card/Card';
import {CardData, baseUrl} from "../components/Card/CardData";

const Blind = () => {
    return (
        <Card algos={CardData} baseUrl={baseUrl}/>
    )
}

export default Blind;
