import React, {lazy, Suspense} from 'react'

import { baseUrl } from "../components/Card/CardData";
import {algsLUB, algsUBL, algsURB, algsLFU, algsULF, algsLDF} from "../components/Card/bldCorners";
import Box from "../components/Box/Box";

/* Lazy Load Pages */
const Card = lazy(() =>  import('../components/Card/Card'));
//import Card from "../components/Card/Card";

const Blind = () => {
    return (
        <Suspense fallback={<div style={{display: "flex", justifyContent: "center"}}> Loading ... </div>}>
            <Box title="UBL (A)">
                <Card algos={algsUBL} baseUrl={baseUrl} />
            </Box>

           <Box title="URB (B)">
                <Card algos={algsURB} baseUrl={baseUrl} />
            </Box>

            <Box title="ULF (D)">
                <Card algos={algsULF} baseUrl={baseUrl} />
            </Box>

            <Box title="LUB (E)">
                <Card algos={algsLUB} baseUrl={baseUrl} />
            </Box>

            <Box title="LFU (F)">
                <Card algos={algsLFU} baseUrl={baseUrl} />
            </Box>

            <Box title="LDF (G)">
                <Card algos={algsLDF} baseUrl={baseUrl} />
            </Box>

            <Box title="LDB (H)">
                <Card algos={algsLDF} baseUrl={baseUrl} />
            </Box>
        </Suspense>
    )
}

export default Blind;
