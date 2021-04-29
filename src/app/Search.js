import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    state = {
      search: '',
      sortFilter: 'pokemon',
      typeFilter: ''

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

  
    componentDidUpdate(prevProp, prevState) {
      if (prevState !== this.state) {
        this.props.onSearch(this.state);
        // this.props.onSearch(this.state.search);
      }
    }
    render() {
      const { search, sortFilter } = this.state;
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
            <option value="pokemon">All</option>
            <option value="shape">Shape</option>
            <option value="attack">Attack</option>
            <option value="ability_1">Ability</option>

          </select>

          <button>Search</button>

        </form>
      );
    }

}