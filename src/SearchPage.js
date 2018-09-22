import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    query: []
  };

  handleSearch = e => {
    const max = 20;
    const value = e.target.value;
    //reset search
    if (value === "") {
      this.setState({ query: [] });
    } else {
      BooksAPI.search(value, max).then(books => {
        this.setState({
          query: [...books].map(book => {
            for (let i = 0; i < this.props.books.length; i++) {
              if (book.id === this.props.books[i].id) {
                book.shelf = this.props.books[i].shelf;
                return book;
              }
            }
            book.shelf = "none";
            return book;
          })
        });
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.map(book => (
              <li key={book.id}>
                <Book book={book} update={this.props.update} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
