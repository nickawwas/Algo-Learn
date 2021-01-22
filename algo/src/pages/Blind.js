import React from 'react'

import Card from '../components/Card/Card';
import {CardData, imgUrl} from "../components/Card/CardData";

const Blind = () => {
    return (
        <Card algos={CardData} imgUrl={imgUrl}/>
    )
}

export default Blind;
