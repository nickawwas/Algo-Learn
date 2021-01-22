import React from 'react'

import Card from '../components/Card/Card';
import {cllData, imgUrl} from "../components/Card/cllData";

const Mini = () => {
    return (
        <Card algos={cllData} imgUrl={imgUrl}/>
    )
}

export default Mini;
