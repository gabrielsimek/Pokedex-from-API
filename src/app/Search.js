import { Component } from 'react';
import './Search.css';
import './Paging';
import Paging from './Paging';

export default class Search extends Component {
  state = {
    search: '',
    sortFilter: 'pokemon',
    typeFilter: '',
    sortOrder: 'asc',
    perPage: '20',
    page: 1,
    //The source of truth! ^^
  }

  handleSubmit = (e) => {
    const onSearch = this.props.onSearch;
    e.preventDefault();
    // this.props.onSort(this.state.sortFilter);
    //set page back to 1 if doing a search, then update with the search terms only on submit
    this.setState({ page: 1 },
      () => {
        onSearch(this.state);

      }
    );
  }

  handlePageChange = (change) => {
    const onSearch = this.props.onSearch;
    //set the state, once it's set send it back up to app via callback?
    this.setState({ page: this.state.page + change },
      () => {
        onSearch(this.state);

      });


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

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
      // this.props.onSearch(this.state.search);
    }
  }



  render() {
    const { search, sortFilter, sortOrder, perPage, page, type } = this.state;
    const { types } = this.props;
    console.log(types);

    return (
      <div>
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


          <select
            value={type}
            onChange={this.handleTypeChange}
          >
            <option value=''>types</option>
            {types.map((type, index) => {
              return <option key={index} value={type}>{type}</option>;

            })
            }


          </select>

          <button>Search</button>


        </form>
        {/* index.js:1 Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components. */}
        <Paging pageChange={this.handlePageChange} pokemon={this.props.pokemon} page={page} perPage={perPage} searchTerm={search} />
      </div>
    );
  }

}