import React, { Component } from 'react'
import * as BooksAPI from './BooksApi.js'
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom'

class Search extends Component {
  state = {
    //initial query
    query: '',
    //array with the searched books
    searched: []
  }

  //updating searched array
  searchQuery = (query) => {
      this.setState({query})
      if (query !== '') {
        BooksAPI.search(query).then(searched => {
          if (!searched || searched.error) {
            this.setState({ searched: [] })
          } else {
            this.setState({searched})
          }
        })
      } else {
          this.setState({ searched: [] })
      }
    }

  render () {
    const {query, searched} = this.state
    const {UpdateShelf, books} = this.props

    return (
      <div>
          {/*Link to cleose the search page*/}
          <Link
            to="/"
            className="close-search"
          >
            Close
          </Link>
          <div className="search-input">
            <input
              type = "text"
              placeholder = "Search for a book..."
              onChange = {event =>
                //changing the query
                this.searchQuery(event.target.value)
              }
              value = {query}

              />
            </div>

          <div>
            <ol className="books-list">
              {/* looping through the searched array*/}
              {searched.map(search => {
                let shelf = 'none'
                  //looping through the books array
                  books.map (book => {
                    //if the book is the same like the searched one...
                    if (book.id === search.id) {
                      //set the same shelf
                      return shelf = book.shelf
                    } else {
                      return ''
                    }
                  })
                  return (
                    <li key={search.id}>
                      <Shelf
                        book = {search}
                        UpdateShelf = {UpdateShelf}
                        presentShelf={shelf}
                      />
                    </li>
                  )
              })}
            </ol>
          </div>
      </div>
    )
  }
}

export default Search
