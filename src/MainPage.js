import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Aladdin's Reads 😍</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <Bookshelf
                shelfName="Currently Reading"
                books={this.props.books.filter(
                  book => book.shelf === "currentlyReading"
                )}
                update={this.props.update}
              />
            </div>
            <div className="bookshelf">
              <Bookshelf
                shelfName="Want to Read"
                books={this.props.books.filter(
                  book => book.shelf === "wantToRead"
                )}
                update={this.props.update}
              />
            </div>
            <div className="bookshelf">
              <Bookshelf
                shelfName="Read"
                books={this.props.books.filter(book => book.shelf === "read")}
                update={this.props.update}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
