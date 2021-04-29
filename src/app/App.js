import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PokeList from '../pokemon/PokeList';
import request, { search } from 'superagent';


const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?';


class App extends Component {
  state = {
    pokemon: null,
    search: '' 
  }

  // (`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${sortFilter}&direction=asc&perPage=50`)

  async componentDidMount() {
    this.fetchPokemon();
  }
  async fetchPokemon(search, sortFilter, sortOrder, perPage) {
    const response = await request.get(POKEMON_API_URL).query({ pokemon: search })
      .query({ sort: sortFilter, direction: sortOrder })
      .query({ perPage: perPage });

    this.setState({ pokemon: response.body.results });

  } 

  handleSearch = ({ search, sortFilter, sortOrder, perPage }) => {
    // this.setState ({ search: search });
    this.fetchPokemon(search, sortFilter, sortOrder, perPage);
  }; 
  
  // async handleSort(sortFilter) {
  //   this.fetchPokemon(sortFilter);
  // }

  // handleSort = ({ sortFilter }) => {
  //   console.log(sortFilter);
  //   const pokemon = this.state.pokemon;
  //   const sortedPokemon = pokemon
  //     .sort((a, b) => {
        
  //       if (sortFilter === 'attack') {
  //         if (a[sortFilter] > b[sortFilter]) return -1;
  //         if (a[sortFilter] < b[sortFilter]) return 1;
  //         return 0;

  //       } else {
  //         if (a[sortFilter] < b[sortFilter]) return -1;
  //         if (a[sortFilter] > b[sortFilter]) return 1;
  //         return 0;}
        

  //     });
    
    
  //   this.setState({ pokemon: sortedPokemon }); 
  // };
 

 

  
  render() {
    const { pokemon } = this.state;
    return (
      

      <div className="App">
        <Header/>

        <Search onSearch={this.handleSearch} />

        <main>
        
          {pokemon && (pokemon.length
          //why does this only does this only not display no match on load when wrapped in ()!!!
            ? <PokeList pokemon={pokemon}/>
            : <p className="noMatch">No matching Pokemon</p>)}
          {/* <PokeList pokemon={pokemon}/> */}
        </main>
        <Footer/>

       
      </div>

    );
  }

}

export default App;
