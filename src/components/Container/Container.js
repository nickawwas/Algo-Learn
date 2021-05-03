import React from 'react';

import "./Container.css";

const Container = props => {
    return (
        <div className='container'>
            { props.sections.map(sec => (
                <div className='mini-container' key={sec.title}>
                    <p className="container-title"> {sec.title} </p> 
                    <div className='mini-sub'>
                        {sec.subSections.map(sub => (
                            <div className="alg-holder" key={sub.section}>
                                <img className="alg-img" src={sub.baseUrl} alt='test' />
                                <span className="alg-type"> {sub.section} </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Container;
