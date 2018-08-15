import React, { Component } from 'react';

import './App.css';
import Search from './components/Search.js'
import Books from './components/Books.js'
import * as BooksAPI from './components/BooksApi.js'


class App extends Component {
  state = {
      books: []
  }

  //getting books from BooksAPI and put them to the state
  componentDidMount() {
      BooksAPI.getAll().then(books => {
          this.setState({ books })
      })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }


  render() {
    return (
      <div className="App">
        <Search />
        <Books
          updateShelf={this.updateShelf}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
