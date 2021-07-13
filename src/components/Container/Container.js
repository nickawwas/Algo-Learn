import React from "react";

import "./Container.css";

const Container = ({ sections }) => {
  return (
    <div className="container">
      {sections.map(({ title, subSections }) => (
        <div className="mini-container" key={title}>
          <p className="container-title"> {title} </p>
          <div className="mini-sub">
            {subSections.map(({ baseUrl, section }) => (
              <div className="alg-holder" key={section}>
                <img className="alg-img" src={baseUrl} alt="test" />
                <span className="alg-type"> {section} </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
