import React, { Component } from 'react';

class Shelf extends Component {
  render () {
    
    return(
      <div>
        <ol>
          {this.props.books.map((book, index) =>
            <li key={book.id}>
            </li>
          )}
        </ol>
      </div>
    )
  }
}

export default Shelf
