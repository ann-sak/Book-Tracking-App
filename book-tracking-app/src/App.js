import React, { Component } from 'react';

import './App.css';
import Search from './components/Search.js'
import Books from './components/Books.js'
import * as BooksAPI from './components/BooksApi.js'


class App extends Component {
  state = {
      myReads: []
  }

  componentDidMount() {
      BooksAPI.getAll().then(myReads => {
          this.setState({ myReads })
      })
  }


  render() {
    return (
      <div className="App">
        <Search />
        <Books />
      </div>
    );
  }
}

export default App;
