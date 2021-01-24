import React from 'react';

import "./Container.css";

const Container = props => {
    return (
        <div className='container'>
            { props.sections.map(sec => (
                <div className='mini-container'>
                    <p className="container-title"> {sec.title} </p> 
                    <div className='mini-sub'>
                        {sec.subSections.map(sub => (
                            <div className="alg-holder">
                                <img className="alg-img" src="https://cubing.net/api/visualcube/?fmt=svg&view=plan&pzl=2&case=RUR'URU2R'" alt='test' />
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
