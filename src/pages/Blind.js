import React, {lazy, Suspense} from 'react'

import { baseUrl } from "../components/Card/CardData";
import {algsLUB, algsUBL, algsURB, algsLFU, algsULF, algsLDF, algsLBD, algsFUL, algsFDR, algsFLD} from "../components/Card/bldCorners";
import Box from "../components/Box/Box";
import Loading from './Loading';

/* Lazy Load Pages */
const Card = lazy(() =>  import('../components/Card/Card'));
//import Card from "../components/Card/Card";

const Blind = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <div style={{display: "flex", margin: "0 12% 1rem", paddingRight: "10%", fontSize: `1.8rem`, borderBottom: "2px solid #007CC7", fontWeight: "200", fontFamily: "Antonio, sans-serif"}}> CORNERS </div>

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

            <Box title="LBD (H)">
                <Card algos={algsLBD} baseUrl={baseUrl} />
            </Box>

            <Box title="FUL (I)">
                <Card algos={algsFUL} baseUrl={baseUrl} />
            </Box>

            <Box title="FDR (K)">
                <Card algos={algsFDR} baseUrl={baseUrl} />
            </Box>

            <Box title="FLD (L)">
                <Card algos={algsFLD} baseUrl={baseUrl} />
            </Box>

            {/*  N - O - P - E*/}

        </Suspense>
    )
}

export default Blind;
