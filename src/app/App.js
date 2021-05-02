import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PokeList from '../pokemon/PokeList';
import request from 'superagent';


const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?';
const POKEMON_API_TYPES_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/types';


class App extends Component {
  state = {
    pokemon: null,
    types: []
  }


  async fetchType() {

    const response = await request.get(POKEMON_API_TYPES_URL);
    const types = [...new Set(response.body.map(type => type.type))];
    this.setState({ types: types });

  }

  //anamoys call back () is a void refetches data after setting state.

  async componentDidMount() {
    //set org state of app, get pokemon and sort by name in asc
    const asc = 'asc';
    const pokeSort = 'pokemon';
    const response = await request.get(POKEMON_API_URL).query({ sort: pokeSort, direction: asc });
    this.setState({ pokemon: response.body.results });
    this.fetchType();

    // this.fetchPokemon();
  }

  async fetchPokemon(search, sortFilter, sortOrder, perPage, page, type) {
    console.log(sortFilter, type);
    //can change all this state so it's names match the apis query params and pass in as one object to query
    const response = await request.get(POKEMON_API_URL)
      .query({ pokemon: search, type: type })
      .query({ sort: sortFilter, direction: sortOrder })
      .query({ perPage: perPage })
      .query({ page: page });


    this.setState({ pokemon: response.body.results });

  }
  // if (pokemon.length === 0) {
  //   console.log('no more poke');

  // } else {
  //   this.setState({ page: this.state.page + change },
  //     () => {
  //       onSearch(this.state);

  //     });


  handleSearch = ({ search, sortFilter, sortOrder, perPage, page, type }) => {

    this.fetchPokemon(search, sortFilter, sortOrder, perPage, page, type);

  };


  render() {
    const { pokemon, types } = this.state;
    return (



      <div className="App">
        <Header />

        <Search onSearch={this.handleSearch} pokemon={pokemon} types={types} />

        <main>

          {pokemon && (pokemon.length
            //why does this only does this only not display no match on load when wrapped in ()!!!
            ? <PokeList pokemon={pokemon} />
            : <p className="noMatch">No matching Pokemon</p>)}
          {/* <PokeList pokemon={pokemon}/> */}
        </main>
        <Footer />


      </div>

    );
  }

}

export default App;
