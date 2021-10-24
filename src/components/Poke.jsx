import React, { useState } from 'react';
import useGet from '../utils/useHttp';
import Loader from './Loader';

import './Poke.css';


const Poke = () => {

    const api = "https://pokeapi.co/api/v2/pokemon/";
    const [pokeData, loading] = useGet({ url: api });
    const [namePoke, setNamePoke] = useState("");
    const [pokeFilter, setPokeFilter] = useState([]);
  

    const handlerInput = (e) => {
        setNamePoke(e.target.value);
        
    }
    
    const searchPoke = (e) => {
        
        let pokemon = pokeData.filter((poke) => poke.name === namePoke);
        setPokeFilter(pokemon);
        
        console.log(pokeData)
        e.preventDefault();
        e.target.reset();

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <form onSubmit={searchPoke}>
                            <input type="text" className="form-control" value={pokeData.name} placeholder="Nombre del Pokemon"  onChange={handlerInput} />
                          
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-success my-2">Buscar pokemon</button>
                            </div>

                        </form>
                    </div>
                </div>

                {
                    loading ? (<Loader />) :
                    (
                        <div className="row d-flex justify-content-center">
                        {pokeFilter.map(pokemon => (
                            <div className="col-12 mt-5 d-flex justify-content-center" key={pokemon.id} >
                                <div className="one-card">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} className="card-img-fluid" />
                                    <div className="card-header-one mt-3">
                                        <h3 className="card-title text-center">{pokemon.name}</h3>
    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    )
                }

               
               
            </div>
        </>
    )
}

export default Poke;