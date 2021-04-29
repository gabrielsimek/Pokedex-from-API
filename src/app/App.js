import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import PokeList from '../pokemon/PokeList';
import request from 'superagent';


const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=asc';


class App extends Component {
  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    
    this.setState({ pokemon: response.body.results });
    
  }

  handleSearch = ({ nameFilter, sortFilter }) => {
    console.log(sortFilter);
    const regEx = new RegExp(nameFilter, 'i');
    const pokemon = this.state.pokemon;
    const sortedPokemon = pokemon.filter((poke) => {
      return poke.pokemon.match(regEx);
    })
      .sort((a, b) => {
        
        if (sortFilter === 'attack') {
          if (a[sortFilter] > b[sortFilter]) return -1;
          if (a[sortFilter] < b[sortFilter]) return 1;
          return 0;

        } else {
          if (a[sortFilter] < b[sortFilter]) return -1;
          if (a[sortFilter] > b[sortFilter]) return 1;
          return 0;}
        

      });
    
    
    this.setState({ pokemon: sortedPokemon }); 
  }
 

 

  
  render() {
    const { pokemon } = this.state;
    return (
      

      <div className="App">
        <Header/>

        <Search onSearch={this.handleSearch}/>

        <main>
          <PokeList pokemon={pokemon}/>
        </main>
        <Footer/>

       
      </div>

    );
  }

}

export default App;
