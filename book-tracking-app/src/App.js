import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Search from './components/Search.js'
import Books from './components/Books.js'
import * as BooksAPI from './components/BooksApi.js'


class App extends Component {
  state = {
      //initial books
      books: [],
  }

  //update() function comes with BooksAPI
  UpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
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
        <Route exact path='/' render = {() => (
          //rendering shelves with books
          <Books
            UpdateShelf = {this.UpdateShelf}
            books = {this.state.books}
          />
        )}/>

        <Route exact path='/search' render = {() => (
          //rendering search link
          <Search
            UpdateShelf = {this.UpdateShelf}
            books = {this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default App;
