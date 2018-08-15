import React, { Component } from 'react'
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom'

class Books extends Component {
  render () {
    const {books, UpdateShelf} = this.props

    return (
      <div>

        <h1> My Books</h1>

        <div>
          <h2>Currently Reading</h2>
            <ol>
              { books.filter(book =>
                book.shelf === 'currentlyReading').map(book => (
                  <li key={book.id}>
                    <Shelf
                      UpdateShelf={UpdateShelf}
                      book={book}
                    />
                  </li>
              ))}
            </ol>
        </div>

        <div>
          <h2>Want to Read</h2>
            <ol>
              { books.filter(book =>
                book.shelf === 'wantToRead').map(book => (
                  <li key={book.id}>
                    <Shelf
                      UpdateShelf={UpdateShelf}
                      book={book}

                    />
                  </li>
              ))}
            </ol>
        </div>

        <div>
          <h2>Read</h2>
          <ol>
            { books.filter(book =>
              book.shelf === 'read').map(book => (
                <li key={book.id}>
                  <Shelf
                    UpdateShelf={UpdateShelf}
                    book={book}
                  />
                </li>
            ))}
          </ol>
        </div>
        <Link
          to = "/search"
        >
          Search for a book
        </Link>
      </div>
    )
  }
}

export default Books
