import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokeList from '../pokemon/PokeList';
import request from 'superagent';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=50';


class App extends Component {
  state = {
    pokemon: []
  }


  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    this.setState({ pokemon: response.body.results });
    console.log(this.state);
  }
  render() {
    const { pokemon } = this.state;
    return (
      

      <div className="App">
        <Header/>

        <main>
          <PokeList pokemon={pokemon}/>
        </main>
        <Footer/>

       
      </div>

    );
  }

}

export default App;
