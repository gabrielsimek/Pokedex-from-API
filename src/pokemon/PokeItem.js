import { Component } from 'react';
import './PokeItem.css';

export default class PokeItem extends Component {
  
  render() {
    const poke = this.props.poke;
    console.log(poke);
    return (
      <li className="PokeItem">
        <h2>Pokemon</h2>
        <img src={poke.url_image} alt={poke.pokemon}/>
        <p>Type: {poke.type_1}</p>
        <p>Attack: {poke.attack} </p>
        <p>Defense: {poke.defense} </p>
      </li>
    );
  }

}