import React from 'react';
import useGet from '../utils/useHttp';
import Loader from './Loader';

import './PokeList.css';

function PokeList() {

    const api = "https://pokeapi.co/api/v2/pokemon/";
    const [pokeData, loading] = useGet({ url: api });

    return (
        <>
            {
                loading ? (<Loader />) : (
                    <div className="container-fluid">
                   
                        <div className="row d-flex justify-content-center">
                            {pokeData.map(pokemon => (
                                <div className="col-4 mt-5 d-flex justify-content-center" key={pokemon.id} >
                                    <div className="card ">
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} className="card-img-fluid" />
                                        <div className="card-header mt-3">
                                            <h3 className="card-title text-center text-white">{pokemon.name}</h3>
        
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }

          
        </>
    )
}

export default PokeList
