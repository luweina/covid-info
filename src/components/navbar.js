import React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'


function TopNavbar () {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Covid-Tracker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/myth">Mythbusters</Nav.Link>
      <Nav.Link href="/self-test">Self-Test</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}

export default TopNavbar