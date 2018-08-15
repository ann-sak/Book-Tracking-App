import React, { Component } from 'react';

import './App.css';
import Search from './components/Search.js'
import Books from './components/Books.js'
import * as BooksAPI from './components/BooksApi.js'


class App extends Component {
  state = {
      books: [],
  }

  UpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((books) => {
       this.setState({books})
     })
  }
  //getting books from BooksAPI and put them to the state
  componentDidMount() {
      BooksAPI.getAll().then(books => {
          this.setState({ books })
      })
  }




  render() {
    return (
      <div className="App">
        <Search
          UpdateShelf = {this.UpdateShelf}
          books = {this.state.books}
        />
        <Books
          UpdateShelf = {this.UpdateShelf}
          books = {this.state.books}
        />
      </div>
    );
  }
}

export default App;
