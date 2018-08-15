import React, { Component } from 'react'
import Shelf from './Shelf.js'

class Books extends Component {
  render () {
    const {books, updateShelf} = this.props

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
                    book={book}
                  />
                </li>
            ))}
          </ol>
        </div>

      </div>
    )
  }
}

export default Books
