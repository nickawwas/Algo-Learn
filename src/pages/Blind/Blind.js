import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

import { baseUrl } from "../../components/Card/CardData";
import { cornerCases, cornerAlgos } from "./bldCorners";
import { edgeAlgos, edgeCases } from "./bldEges";

import Box from "../../components/Box/Box";
import Loading from "../Loading";
import Title from "../../components/Title/Title";

/* Lazy Load Pages */
const Card = lazy(() => import("../../components/Card/Card"));

const Blind = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Helmet>
        <title>3-Bld 3-Style</title>
        <meta name="description" content="Learn 3 Style Algorithms for 3-Bld" />
        <meta
          name="keywords"
          content="3-Blind Rubik's Cube 3 Style Algorithms Cubing"
        />
      </Helmet>

      {/* <nav className="bld-tabs">
        <ul className="nav-tab-list">
          <li
            className={currentTab === 0 ? "current-tab" : "tab"}
            onClick={() => setCurrentTab(0)}
          >
            CORNERS
          </li>

          <li
            className={currentTab === 1 ? "current-tab" : "tab"}
            onClick={() => setCurrentTab(1)}
          >
            EDGES
          </li>
        </ul>
      </nav> */}

      <Title page="CORNERS" />
      {cornerCases.map((corner, key) => {
        return (
          <Box title={corner} key={key}>
            <Suspense fallback={<Loading />}>
              <Card algos={cornerAlgos[key]} baseUrl={baseUrl} />
            </Suspense>
          </Box>
        );
      })}

      <Title page="EDGES" />
      {edgeCases.map((corner, key) => {
        return (
          <Box title={corner} key={key}>
            <Suspense fallback={<Loading />}>
              <Card algos={edgeAlgos[key]} baseUrl={baseUrl} />
            </Suspense>
          </Box>
        );
      })}

      {/* ADD MARGIN TO BOTTOM */}
      <div style={{ marginBottom: "5rem" }}></div>
    </Suspense>
  );
};

export default Blind;
