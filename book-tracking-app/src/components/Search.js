import React, { Component } from 'react'
import * as BooksAPI from './BooksApi.js'
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    searched: []
  }

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
        <div>
          <Link
            to="/"
          >
            Close
          </Link>
          <input
            type = "text"
            onChange = {event =>
              this.searchQuery(event.target.value)
            }
            placeholder = "Search"
            value = {query}

            />
          </div>

          <div>
            <ol>
              {searched.map(search => {
                let shelf = 'none'
                  books.map (book => {
                    if (book.id === search.id) {
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
