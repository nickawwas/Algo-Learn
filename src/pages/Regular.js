import React from "react";

import Card from "../components/Card/Card";
import Box from "../components/Box/Box";

import { baseUrl } from "../components/Card/CardData";
import { ollAlgs, pllAlgs } from "../components/Card/regularData";

const Regular = () => {
  return (
    <>
        <Box title="F2L">
            IN PROGRESS
        </Box>

        <Box title="OLL">
            <Card algos={ollAlgs} baseUrl={baseUrl} />{" "}
        </Box>

        <Box title="PLL">
            <Card algos={pllAlgs} baseUrl={baseUrl} />{" "}
        </Box>
    </>
  );
};

export default Regular;
