import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { addSaved, removeSaved, updateSaved } from "../../redux/actions";

import "./Card.css"

const Card = ({algos, baseUrl}) => {
    //Use Dispatch to Dispatch Action
    const dispatch = useDispatch();

    //Get Store from Redux
    const savedStore = useSelector(state => state.stars);
    
    /* Update Starred Image List */
    const updateStarred = (algo) => {
        const newStar = JSON.stringify(algo?.url ? {...algo} : {...algo,  url: baseUrl});
        if(!savedStore.includes(newStar))
            dispatch(addSaved(newStar));
        else
            dispatch(removeSaved(newStar));
    }

    const savedState = (algo) => {
        const newStar = JSON.stringify(algo?.url ? {...algo} : {...algo,  url: baseUrl});
        return savedStore.includes(newStar);
    };

    /* On Refresh Use Local Storage As Saved Algs */
    useEffect(() => {
        if(savedStore.length === 0 && localStorage.getItem("savedAlgs")?.length > 2)
            dispatch(updateSaved(JSON.parse(localStorage.getItem("savedAlgs"))));
        // eslint-disable-next-line
    }, [])

    /* Update Local Storage With Changes In Saved State */
    useEffect(() => {
        localStorage.setItem("savedAlgs", JSON.stringify(savedStore));
    }, [savedStore])

    /* Use State Hook to Rotate the Cube */
    const [spin, setSpin] = useState([]);
    const updateSpin = (algo) => {
        setSpin(() => 
            !spin.includes(algo) ? [...spin, algo] 
            : spin.filter(cubeState => cubeState !== algo));
    }
    const setCubeRotation = (algo) => {
        return spin.includes(algo) ? "y2" : "";
    }

    /* Fetch Image Using API Call */
    const fetchImg = (img, algo) => {
        const noSpaces = algo.replace(/\s/g, '');
        return `${img}${noSpaces}`;
    };

    return (
        <div className='cubing'>
            { Object.keys(algos).length !== 0 &&
                <div className="cubing-card"> 
                    { algos.map((algo, key) => (
                        <div className='algs' key={`${algo.case} ${key}`}>
                            <div className="alg-case">
                                {/* ALG CASE */}
                                <span> {algo.case} </span>
                                
                                {/* STAR + ROTATE SVGs */}
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="20" height="20" viewBox="0 0 24 24" 
                                    className="saved" onClick={() => updateStarred(algo)}><path d={savedState(algo) ? "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" : "M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"}/></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" 
                                    className={!spin.includes(algo) ? "rotateCube" : "rotateCube spin"} 
                                    onClick={() => updateSpin(algo)}><path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"/></svg>
                                
                                {/* CUBE IMG */}
                                <img src={fetchImg(algo?.url || baseUrl, setCubeRotation(algo) + algo.algs[0].alg)} alt="Cube" />
                            </div>

                            <div className="alg-notation">
                                { algo.algs.map(algz => (
                                    <span className="alg-moves" key={algz.alg}> {algz.alg} </span>
                                ))}
                            </div>  
                        </div>
                    ))}

                </div>
            }
        </div>
    )
};

export default Card;
