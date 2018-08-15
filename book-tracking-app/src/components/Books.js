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
          <Shelf
            books={this.props.books}
          />
        </div>

        <div>
          <h2>Want to Read</h2>
          <Shelf
            books={this.props.books}
          />
        </div>

        <div>
          <h2>Read</h2>
          <Shelf
            books={this.props.books}
          />
        </div>

      </div>
    )
  }
}

export default Books
