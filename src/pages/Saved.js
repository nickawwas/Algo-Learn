import React from 'react';

import Title from '../components/Title';
import Card from '../components/Card/Card';

import { baseUrl } from "../components/Card/CardData";

import { useSelector } from "react-redux";

const Saved = () => {
    /* Saved Algs from Redux Store */
    const savedStore = useSelector(state => state.savedReducer);

    /* Store in Temp Variable to Parse JSON */
    const tmpStore = savedStore.map(algo => JSON.parse(algo));

    return (
        <>
            <Title page="SAVED"/>
         
            {tmpStore != 0 &&
                <Card algos={tmpStore} baseUrl={baseUrl}/>
            }
            {/*  
            <div> 
                { savedStore.map((algo, key) => (
                    <div className='algs' key={`${algo.case} ${key}`}>
                        <div className="alg-case">
                            <span> {JSON.parse(algo).case} </span>
                        
                            <img src={`${baseUrl}${JSON.parse(algo).algs[0].alg}`} alt="Cube" />
                        </div>

                        <div className="alg-notation">
                            { JSON.parse(algo).algs.map(algz => (
                                <span className="alg-moves" key={algz.alg}> {algz.alg} </span>
                            ))}
                        </div>  
                    </div>
                ))}
            </div>
                */}
        </>
    )
}

export default Saved;
