import React from "react";

class Book extends React.Component {
  render() {
    const bookStyle = {
      width: 128,
      height: 192,
      backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookStyle} />
          <div className="book-shelf-changer">
            <select
              defaultValue={this.props.book.shelf}
              onChange={e => {
                this.props.update(this.props.book, e.target.value);
              }}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors ? this.props.book.authors.join(", ") : ""}
        </div>
      </div>
    );
  }
}

export default Book;
