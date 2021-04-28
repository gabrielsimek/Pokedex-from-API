import { Component } from 'react';
import './PokeList.css';
import PokeItem from './PokeItem';

export default class PokeList extends Component {
  
  render() {
    const pokemon = this.props.pokemon;
    return (
      <ul className="PokeList">
        {pokemon.map((poke) => {
          return <PokeItem key={poke._id} poke={poke}/>; 
        })}
      </ul>
      
    );
  }

}