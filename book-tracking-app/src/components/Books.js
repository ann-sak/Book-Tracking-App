import React, { Component } from 'react'
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom'
import '../App.css';

class Books extends Component {
  render () {
    const {books, UpdateShelf} = this.props

    return (
      <div>
        <div className="app-title">
          <h1 > My Books</h1>
        </div>
        <div>
          <h2 className="shelf-title">Currently Reading</h2>
            <ol className="books-list">
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
          <h2 className="shelf-title">Want to Read</h2>
            <ol className="books-list">
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
          <h2 className="shelf-title">Read</h2>
          <ol className="books-list">
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
        <div className="open-search">
          <Link
            to = "/search"
          >
            Search for a book
          </Link>
        </div>
      </div>
    )
  }
}

export default Books
