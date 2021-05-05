import React, {lazy, Suspense} from "react";

import Box from "../../components/Box/Box";

import { f2lUrl, ollUrl, pllUrl } from "../../components/Card/CardData";
import { f2lAlgs, ollAlgs, pllAlgs } from "./RegData";

import Title from '../../components/Title';
import Loading from "../Loading";

/* Lazy Load Pages */
const Card = lazy(() =>  import('../../components/Card/Card'));

const Regular = () => {
  return (
    <Suspense fallback={<Loading/>}>
        <Title page="3 x 3"/>

        <Box title="F2L">
          <Card algos={f2lAlgs} baseUrl={f2lUrl} />
        </Box>

        <Box title="OLL">
            <Card algos={ollAlgs} baseUrl={ollUrl} />
        </Box>

        <Box title="PLL">
            <Card algos={pllAlgs} baseUrl={pllUrl}  />
        </Box>
    </Suspense>
  );
};

export default Regular;
