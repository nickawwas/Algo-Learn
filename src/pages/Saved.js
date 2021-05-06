import React from 'react';

import Title from '../components/Title';
import Card from '../components/Card/Card';

import { baseUrl } from "../components/Card/CardData";
import { useSelector } from "react-redux";
import { Helmet } from 'react-helmet';

const Saved = () => {
    /* Saved Algs from Redux Store */
    const savedStore = useSelector(state => state.stars);

    /* Store in Temp Variable to Parse JSON */
    const tmpStore = savedStore.map(algo => JSON.parse(algo));

    return (
        <>
            <Helmet>
                <title>
                    Saved Algs
                </title>
                <meta 
                    name="description"
                    content="Save Favorite 2x2, 3x3, and 3-Bld Algorithms to Practice and Enjoy Them"
                />
                <meta 
                    name="keywords"
                    content="2x2 3x3 Rubik's Cube CFOP Ortega Algorithms CLL EG-1 EG-2 PBL F2L OLL PLL 3-Style Algs Cubing"
                />
            </Helmet>

            <Title page="SAVED"/>
            <Card algos={tmpStore} baseUrl={baseUrl}/>
        </>
    )
}

export default Saved;
