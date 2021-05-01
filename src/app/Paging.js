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




    render() {
      const page = this.props.page;
      const pokemon = this.props.pokemon;
      const perPage = this.props.perPage;
      console.log(page);

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
          <button onClick={this.handleToFirstPage}>To first Page</button>
        </div>
      );
    }

}
//pokemon && !pokemon.length