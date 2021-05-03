import React, {lazy, Suspense} from 'react'

import { baseUrl } from "../components/Card/CardData";
import {algsLUB, algsUBL, algsURB, algsLFU, algsULF, algsLDF, algsLBD, algsFUL, algsFDR, algsFLD, algsRBU, algsRDB, algsRFD, algsBUR, algsBLU, algsBDL, algsBRD, algsDFL, algsDRF, algsDBR, algsDLB} from "../components/Card/bldCorners";
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

            <Box title="RBU (N)">
                <Card algos={algsRBU} baseUrl={baseUrl} />
            </Box>

            <Box title="RDB (O)">
                <Card algos={algsRDB} baseUrl={baseUrl} />
            </Box>

            <Box title="RFD (P)">
                <Card algos={algsRFD} baseUrl={baseUrl} />
            </Box>

            <Box title="BUR (Q)">
                <Card algos={algsBUR} baseUrl={baseUrl} />
            </Box>

            <Box title="BLU (R)">
                <Card algos={algsBLU} baseUrl={baseUrl} />
            </Box>

            <Box title="BDL (S)">
                <Card algos={algsBDL} baseUrl={baseUrl} />
            </Box>

            <Box title="BRD (T)">
                <Card algos={algsBRD} baseUrl={baseUrl} />
            </Box>

            <Box title="DFL (U)">
                <Card algos={algsDFL} baseUrl={baseUrl} />
            </Box>

            <Box title="DRF (V)">
                <Card algos={algsDRF} baseUrl={baseUrl} />
            </Box>

            <Box title="DBR (W)">
                <Card algos={algsDBR} baseUrl={baseUrl} />
            </Box>

            <Box title="DLB (X)">
                <Card algos={algsDLB} baseUrl={baseUrl} />
            </Box>

            <div style={{display: "flex", margin: "0 12% 1rem", paddingRight: "10%", fontSize: `1.8rem`, borderBottom: "2px solid #007CC7", fontWeight: "200", fontFamily: "Antonio, sans-serif"}}> EDGES </div>
            
            <Box title="UBL (A)">
                <Card algos={algsUBL} baseUrl={baseUrl} />
            </Box>

           <Box title="URB (B)">
                <Card algos={algsURB} baseUrl={baseUrl} />
            </Box>

            {/* ADD MARGIN TO BOTTOM */}
            <div style={{marginBottom: "5rem"}}></div>
        </Suspense>
    )
}

export default Blind;
