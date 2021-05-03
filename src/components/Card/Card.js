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
                    <div className='algs' key={algo.case}>
                        <div className="alg-case">
                            <span> {algo.case} </span>
                            <img src={fetchImg(props.baseUrl, algo.algs[0].alg)} alt="Cube" />
                        </div>

                        <div className="alg-notation">
                            { algo.algs.map(algz => (
                                <span className="alg-moves" key={algz.alg}> {algz.alg} </span>
                            ))}
                        </div>  
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Card;
