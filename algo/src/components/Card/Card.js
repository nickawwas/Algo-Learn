import React from 'react'

import "./Card.css"

const Card = (props) => {
    
    const fetchImg = (algo) => {
        const noSpaces = algo.replace(/\s/g, '');
        return `http://www.cubing.net/api/visualcube/?fmt=svg&case=${noSpaces}`;
    };

    return (
        <div className='cubing'>
            <div className="cubing-data"> 

                {props.algos.map(alg => (
                    <div className='algs'>
                        <div className="alg-case">
                            <span> {alg.algCase} </span>
                            <img src={fetchImg(alg.regAlgo)} alt="Cube" />
                        </div>

                        <div className="alg-notation">
                            <span className="alg-moves"> {alg.regAlgo} </span>
                            <span className="bld-moves"> {alg.bldAlgo} </span>
                        </div>  
                    </div>
                ))}
                {/* <div className="algs">
                     <div className="alg-case">
                        <span> ULB-URB (AB) </span>
                        <img src="http://www.cubing.net/api/visualcube/?fmt=svg&case=" alt="Cube" />
                    </div>

                    <div className="alg-notation">
                        <span className="alg-moves"> Lw' U R' D2 R U' R' D2' R Lw U R' D2 R U' R' D2' R Lw U R' D2 R U' R' D2' R Lw </span>
                        <span className="bld-moves"> [Lw': [U, R' D2 R]] [Lw': [U, R' D2 R]] [Lw': [U, R' D2 R]] [Lw': [U, R' D2 R]] </span>
                    </div>                
                </div>     */}

            </div>
        </div>
    )
};

export default Card;
