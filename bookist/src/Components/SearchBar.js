import React, { Component } from "react";
import Data from "../Data";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      search: [],
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };

  bookSearch = () => {
    let search = Data.filter((book) => {
      return book.title.toLowerCase().includes(this.state.text.toLowerCase());
    });
    this.setState({ search });
    console.log(search);
  };

  clearSearch = () => {
    this.setState({ text: "" });
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <InputGroup>
                <FormControl
                  onChange={this.handleChange}
                  placeholder="Search"
                  value={this.state.text}
                  //   aria-label="Recipient's username with two button addons"
                />
                <Button variant="outline-primary" onClick={this.bookSearch}>
                  Search
                </Button>
                <Button variant="outline-secondary">Clear Search</Button>
              </InputGroup>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
