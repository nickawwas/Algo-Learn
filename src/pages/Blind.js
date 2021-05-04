import React, {lazy, Suspense} from 'react'

import { baseUrl } from "../components/Card/CardData";
import {cornerCases, cornerAlgos} from "../components/Card/bldCorners";
import { edgeAlgos, edgeCases } from '../components/Card/bldEges';

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
            

            {edgeCases.map((corner, key) => {
                return (
                    <Box title={corner} key={key}>
                        <Card algos={edgeAlgos[key]} baseUrl={baseUrl}  />
                    </Box>
                )
            })}

            {/* <Box title="UB (A)">
                <Card algos={algsUB} baseUrl={baseUrl}  />
            </Box>

            <Box title="UR (B)">
                <Card algos={algsUR} baseUrl={baseUrl}  />
            </Box>

            <Box title="UL (D)">
                <Card algos={algsUL} baseUrl={baseUrl}  />
            </Box>

            <Box title="LU (E)">
                <Card algos={algsLU} baseUrl={baseUrl}  />
            </Box>

            <Box title="LF (F)">
                <Card algos={algsLF} baseUrl={baseUrl}  />
            </Box>

            <Box title="LD (G)">
                <Card algos={algsLD} baseUrl={baseUrl}  />
            </Box>

            <Box title="LB (H)">
                <Card algos={algsLB} baseUrl={baseUrl}  />
            </Box>

            <Box title="FR (J)">
                <Card algos={algsFR} baseUrl={baseUrl}  />
            </Box>
            
            <Box title="FD (K)">
                <Card algos={algsFD} baseUrl={baseUrl}  />
            </Box>

            <Box title="FL (L)">
                <Card algos={algsFL} baseUrl={baseUrl}  />
            </Box>

            <Box title="RU (M)">
                <Card algos={algsRU} baseUrl={baseUrl}  />
            </Box>

            <Box title="RB (N)">
                <Card algos={algsRB} baseUrl={baseUrl}  />
            </Box>

            <Box title="RD (O)">
                <Card algos={algsRD} baseUrl={baseUrl}  />
            </Box>

            <Box title="RF (P)">
                <Card algos={algsRF} baseUrl={baseUrl}  />
            </Box>

            <Box title="BU (Q)">
                <Card algos={algsBU} baseUrl={baseUrl}  />
            </Box>

            <Box title="BL (R)">
                <Card algos={algsBL} baseUrl={baseUrl}  />
            </Box>

            <Box title="BD (S)">
                <Card algos={algsBD} baseUrl={baseUrl}  />
            </Box>

            <Box title="BR (T)">
                <Card algos={algsBR} baseUrl={baseUrl}  />
            </Box>

            <Box title="DF (U)">
                <Card algos={algsDF} baseUrl={baseUrl}  />
            </Box>

            <Box title="DR (V)">
                <Card algos={algsDR} baseUrl={baseUrl}  />
            </Box>

            <Box title="DB (W)">
                <Card algos={algsDB} baseUrl={baseUrl}  />
            </Box>

            <Box title="DL (X)">
                <Card algos={algsDL} baseUrl={baseUrl}  />
            </Box> */}

            {/* ADD MARGIN TO BOTTOM */}
            <div style={{marginBottom: "5rem"}}></div>
        </Suspense>
    )
}

export default Blind;
