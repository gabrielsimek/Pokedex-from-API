import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PokeList from '../pokemon/PokeList';
import request from 'superagent';


const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?';


class App extends Component {
  state = {
    pokemon: null,
  }

 

  async componentDidMount() {
    //set org state of app, get pokemon and sort by name in asc
    // const asc = 'asc';
    // const pokeSort = 'pokemon';
    // const response = await request.get(POKEMON_API_URL).query({ sort: pokeSort, direction: asc });
    // this.setState({ pokemon: response.body.results });

    this.fetchPokemon();
  }

  async fetchPokemon(search, sortFilter, sortOrder, perPage) {
    const response = await request.get(POKEMON_API_URL)
      .query({ pokemon: search })
      .query({ sort: sortFilter, direction: sortOrder })
      .query({ perPage: perPage });
      // .query ({ page: this.state.page });

    this.setState({ pokemon: response.body.results });
    
  } 



  handleSearch = ({ search, sortFilter, sortOrder, perPage }) => {
    this.fetchPokemon(search, sortFilter, sortOrder, perPage);
  }; 
  

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
