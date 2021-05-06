import React from 'react';

import Title from '../components/Title';
import Card from '../components/Card/Card';

import { baseUrl } from "../components/Card/CardData";

import { useSelector } from "react-redux";

const Saved = () => {
    /* Saved Algs from Redux Store */
    const savedStore = useSelector(state => state.stars);

    /* Store in Temp Variable to Parse JSON */
    const tmpStore = savedStore.map(algo => JSON.parse(algo));

    return (
        <>
            <Title page="SAVED"/>
         
            {/* SAVED ALGOS */}
            { tmpStore.length !== 0 &&
                <Card algos={tmpStore} baseUrl={baseUrl}/>
            }
        </>
    )
}

export default Saved;
