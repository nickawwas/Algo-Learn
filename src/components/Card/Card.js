import React from 'react'

import "./Card.css"

const Card = (props) => {
    
    const fetchImg = (img, algo) => {
        const noSpaces = algo.replace(/\s/g, '');
        return `${img}${noSpaces}`;
    };

    return (
        <div className='cubing'>
            <div className="cubing-card"> 

                { props.algos.map(algo => (
                    <div className='algs'>
                        <div className="alg-case">
                            <span> {algo.case} </span>
                            <img src={fetchImg(props.baseUrl, algo.algs[0].alg)} loading="lazy" alt="Cube" />
                        </div>

                        <div className="alg-notation">
                            { algo.algs.map(alg => (
                                <span className="alg-moves"> {alg.alg} </span>
                            ))}
                            {/* <span className="alg-moves"> {alg.regAlgo} </span>
                            <span className="bld-moves"> {alg.bldAlgo} </span> */}
                        </div>  
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Card;
