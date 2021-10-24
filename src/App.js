import './App.css';
import Poke from './components/Poke';
import PokeList from './components/PokeList'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        
      <img className="pokeapi"  src="/pokeApi.webp" alt="" />
       <Poke />
       <PokeList />
       
      </header>
    </div>
  );
}

export default App;
