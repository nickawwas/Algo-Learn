import React from 'react'

import Card from '../components/Card/Card';
import {CardData, baseUrl} from "../components/Card/CardData";
import {algsLFU, algsLDF} from "../components/Card/bldCorners";
const Blind = () => {
    return (
        <>
            {/* <Card algos={CardData} baseUrl={baseUrl}/>
            <Card algos={algsULF} baseUrl={baseUrl}/> */}
            <Card algos={algsLDF} baseUrl={baseUrl}/>
        </>
    )
}

export default Blind;
