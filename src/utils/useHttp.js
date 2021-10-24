import { useState, useEffect } from "react";
import axios from "axios";

const useGet = ({ url }) => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const {data} = await axios.get(url);
        const pokemons = data.results;
        setLoading(false);
     
       
        let poke = []
        for ( let i = 0; i < pokemons.length; i++) {
            const {data} = await axios.get(pokemons[i].url);
            const {name, id } = data;
           
            const pokemon = {
                name,
                id
            }
            poke.push(pokemon);
      
        }

        setPokeData(poke);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  }, [url]);
  return [pokeData, loading];
};

export default useGet;
