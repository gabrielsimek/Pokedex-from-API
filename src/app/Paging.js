import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {
    
    handlePreviousPage = () => {
      this.props.pageChange(-1);
    }


    handleNextPage = () => {
      this.props.pageChange(1);
    }

   


 
  
    render() {
      return (
        <div className="Paging">
          <button onClick={this.handlePreviousPage}>Prev</button>
          <button onClick={this.handleNextPage}>Next</button>
        </div>
      );
    }

}