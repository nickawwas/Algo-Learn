import React, {lazy, Suspense} from 'react'

import { baseUrl } from "../components/Card/CardData";
import {cornerCases, cornerAlgos} from "../components/Card/bldCorners";
import { algsUB, algsUL, algsUR } from '../components/Card/bldEges';

import Box from "../components/Box/Box";
import Loading from './Loading';
import Title from '../components/Title';

/* Lazy Load Pages */
const Card = lazy(() =>  import('../components/Card/Card'));

const Blind = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Title page="CORNERS"/>

            {cornerCases.map((corner, key) => {
                return (
                    <Box title={corner} key={key}>
                        <Card algos={cornerAlgos[key]} baseUrl={baseUrl}  />
                    </Box>
                )
            })}

            <Title page="EDGES"/>
            
            <Box title="UB (A)">
                <Card algos={algsUB} baseUrl={baseUrl}  />
            </Box>

            <Box title="UR (B)">
                <Card algos={algsUR} baseUrl={baseUrl}  />
            </Box>

            <Box title="UL (D)">
                <Card algos={algsUL} baseUrl={baseUrl}  />
            </Box>

            {/* ADD MARGIN TO BOTTOM */}
            <div style={{marginBottom: "5rem"}}></div>
        </Suspense>
    )
}

export default Blind;
