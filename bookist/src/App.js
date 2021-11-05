import React, { Component } from "react";
import Header from "./Components/Header";
import BookList from "./Components/BookList";

import data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [{data}],
      shelf: "",
      search: "",
    };
  }

  // addToShelf = (props) => {
  //   this.setState({shelf: this.state.data.title})
  // }

  // filterBooks = (input) => {

  // }

  reset = () => {
    this.setState({ books: "" });
  };

  render() {
    return (
      <div className="App">
        <Header className="Header" />

        <BookList className="BookList" />
      </div>
    );
  }
}

export default App;
