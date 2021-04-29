import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    state = {
      search: '',
      sortFilter: 'pokemon',
      typeFilter: '',
      sortOrder: '',
      perPage: ''

    }

    handleSubmit = (e) => {
      e.preventDefault();
      // this.props.onSort(this.state.sortFilter);
      this.props.onSearch(this.state);
      
    }

    handleSortChange = (e) => {
      this.setState({ sortFilter: e.target.value });

    }

    handleNameChange = (e) => {
      this.setState({ search: e.target.value });
    }

    handleSortOrderChange = (e) => {
      this.setState({ sortOrder: e.target.value });
    }

    handlePerPageChange = (e) => {
      this.setState({ perPage: e.target.value });
    }

  
    componentDidUpdate(prevProp, prevState) {
      if (prevState !== this.state) {
        this.props.onSearch(this.state);
        // this.props.onSearch(this.state.search);
      }
    }
    render() {
      const { search, sortFilter, sortOrder, perPage } = this.state;
      return (
        <form className="Search" onSubmit={this.handleSubmit}>

          <input
            name="nameSearch"
            value={search}
            onChange={this.handleNameChange}
          > 
          </input>
          <select
            value={sortFilter}
            onChange={this.handleSortChange}
          >
            <option value="pokemon">Name</option>
            <option value="shape">Shape</option>
            <option value="attack">Attack</option>
            <option value="ability_1">Ability</option>

          </select>

          <select
            value={sortOrder}
            onChange={this.handleSortOrderChange}
          >
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
            

          </select>

          <select
            value={perPage}
            onChange={this.handlePerPageChange}
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            

          </select>

          <button>Search</button>

        </form>
      );
    }

}