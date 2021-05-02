import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {

  handlePreviousPage = () => {
    this.props.pageChange(-1);
  }


  handleNextPage = () => {
    this.props.pageChange(1);
  }

  handleToFirstPage = () => {
    const thisPage = this.props.page;
    this.props.pageChange(((-thisPage) + 1));
    console.log(this.props.page);
  }


  handleToLastPage = () => {
    const thisPage = this.props.page;
    const perPage = Number(this.props.perPage);
    console.log(perPage);


    if (perPage === 20) {
      this.props.pageChange((41 - thisPage));
    } else if (perPage === 50) {
      this.props.pageChange((17 - thisPage));
    } else {
      this.props.pageChange((9 - thisPage));

    }


  }


  render() {


    const page = this.props.page;
    const pokemon = this.props.pokemon;
    const perPage = this.props.perPage;
    const searchTerm = this.props.searchTerm;
    console.log(page, pokemon, perPage, searchTerm);


    return (
      <div className="Paging">
        <button
          onClick={this.handlePreviousPage}
          disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button
          onClick={this.handleNextPage
          }
          disabled={pokemon && pokemon.length < perPage}>
          Next</button>
        <button
          onClick={this.handleToFirstPage}
          disabled={(pokemon && searchTerm) || page === 1}>
          To first Page</button>

        <button
          disabled={(pokemon && searchTerm) || (pokemon && pokemon.length < perPage)}
          onClick={this.handleToLastPage} >
          To last Page</button>

      </div>
    );
  }

}
//pokemon && !pokemon.length