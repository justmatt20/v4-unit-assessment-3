import React, { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './Data';
import './App.css';
import SearchBar from './Components/SearchBar';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {  
      // books: [{data}],
      shelf: '',
      search: ''
    };
  }

  
  // addToShelf = (props) => {
  //   this.setState({shelf: this.state.data.title})
  // }

  clearShelf= () => {
    this.setState({shelf: ''})
  }

  // filterBooks = (input) => {

  // }

  reset = () => {
    this.setState({books: ''})
  }

render() {
  return (
    
    <div className="App">
      <Header  className="Header"/>
      <SearchBar />
      <BookList className="BookList"/>
      <Shelf />
      
    </div>
  );

}

}



export default App;
