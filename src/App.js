import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

import "./App.css";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ allBooks: [...books] }));
  }

  updatingBooks = (movedBook, toShelf) => {
    BooksAPI.update(movedBook, toShelf).then(() => {
      movedBook.shelf = toShelf;

      let updatedBooks = this.state.allBooks.filter(
        book => book.id !== movedBook.id
      );

      updatedBooks.push(movedBook);
      this.setState({ allBooks: updatedBooks });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.allBooks} update={this.updatingBooks} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.allBooks}
              update={this.updatingBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
