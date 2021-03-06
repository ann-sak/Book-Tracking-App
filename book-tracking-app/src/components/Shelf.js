import React, { Component } from 'react';

class Shelf extends Component {
  render () {
    const {book, UpdateShelf, presentShelf} = this.props

    return(
      <div className="book-item">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 170,
            //setting the thumbnail cover if there is no image for the cover
            backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`)
          }}
        />
        <div className="shelf-changing">
          <select
            //changing the shelf
            onChange = {(event) => UpdateShelf (
              book, event.target.value
            )}
            value={presentShelf}
          >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
          </select>
        </div>
        <div className="books-title">{book.title}</div>
        <div className="books-authors">{book.authors}</div>

      </div>
    )
  }
}

export default Shelf
