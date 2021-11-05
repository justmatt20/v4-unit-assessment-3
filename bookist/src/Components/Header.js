import React, { Component } from "react";
import {
  Navbar,
  Container,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

class Header extends Component {
  render(props) {
    return (
      <div>
        <Container>
          <Navbar expand="xl" variant="light" bg="light">
            <Container className="header">BookList</Container>
          </Navbar>
        </Container>
      </div>
    );
  }
}
export default Header;
