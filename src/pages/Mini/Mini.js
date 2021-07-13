import React, { lazy, Suspense } from "react";

import {
  miniBaseUrl as baseUrl,
  miniSideViewUrl as sideViewUrl,
} from "../../components/Card/CardData";
import { CllData, Eg1Data, Eg2Data, PBLData } from "./MiniData";

import Box from "../../components/Box/Box";
import Loading from "../Loading";
import Title from "../../components/Title/Title";
import { Helmet } from "react-helmet";

/* Lazy Load Pages */
const Card = lazy(() => import("../../components/Card/Card"));

const Mini = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Title page="2 x 2" />

      <Helmet>
        <title>2x2 Ortega</title>
        <meta
          name="description"
          content="Learn 2x2 Ortega Algorithms: CLL, EG-1, EG-2 and PBL"
        />
        <meta
          name="keywords"
          content="2x2 Rubik's Cube Ortega Algorithms CLL EG-1 EG-2 PBL Algs Cubing"
        />
      </Helmet>

      <Box title="CLL">
        <Card algos={CllData} baseUrl={baseUrl} />
      </Box>

      <Box title="EG-1">
        <Card algos={Eg1Data} baseUrl={baseUrl} />
      </Box>

      <Box title="EG-2">
        <Card algos={Eg2Data} baseUrl={baseUrl} />
      </Box>

      <Box title="PBL">
        <Card algos={PBLData} baseUrl={sideViewUrl} />
      </Box>
    </Suspense>
  );
};

export default Mini;
