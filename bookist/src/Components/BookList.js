import React from "react";
import SearchBar from "./SearchBar";
import {
  Container,
  Row,
  Col,
  Card,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import Data from "../Data";

class BookList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shelf: [],
    };
  }

  addBook = (value) => {
    this.setState(() => ({
      shelf: [...this.state.shelf, value.title],
    }));

    console.log(this.state.shelf);
  };

  _renderObject() {
    return Data.map((value, id) => {
      return (
        <div>
          <Card
            style={{ width: "16rem" }}
            key={id}
            onClick={() => this.addBook(value)}
            className="books"
          >
            <Card.Img variant="top" src={value.img} />
            <Card.Body>
              <Card.Text>
                {value.title}
                <span> By </span>

                {value.author}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  renderShelf = () => {
    return this.state.shelf.map((value, id) => {
      return (
        <div key={id}>
          <p>{value} </p>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <div className="shelfctn">
          <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id={`bottom`}>
                <Popover.Header as="h3">{`Shelf`}</Popover.Header>
                <Popover.Body>{this.renderShelf()}</Popover.Body>
              </Popover>
            }
          >
            <Button className="popbtn" variant="info">
              Shelf
            </Button>
          </OverlayTrigger>
        </div>
        <div className="booklist">{this._renderObject()}</div>
      </div>
    );
  }
}

export default BookList;
