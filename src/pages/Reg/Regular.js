import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

import Box from "../../components/Box/Box";

import { f2lUrl, ollUrl, pllUrl } from "../../components/Card/CardData";
import { f2lAlgs, ollAlgs, pllAlgs } from "./RegData";

import Title from "../../components/Title/Title";
import Loading from "../Loading";

/* Lazy Load Pages */
const Card = lazy(() => import("../../components/Card/Card"));

const Regular = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Title page="3 x 3" />

      <Helmet>
        <title>3x3 CFOP</title>
        <meta name="description" content="Learn 3x3 CFOP Algorithms" />
        <meta
          name="keywords"
          content="3x3 CFOP Rubik's Cube Algorithms F2L OLL PLL Algs Cubing"
        />
      </Helmet>

      <Box title="F2L">
        <Card algos={f2lAlgs} baseUrl={f2lUrl} />
      </Box>

      <Box title="OLL">
        <Card algos={ollAlgs} baseUrl={ollUrl} />
      </Box>

      <Box title="PLL">
        <Card algos={pllAlgs} baseUrl={pllUrl} />
      </Box>
    </Suspense>
  );
};

export default Regular;
