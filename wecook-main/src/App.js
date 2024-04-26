import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slider from './components/Slider';

import Header from './components/Header'
import Search from './components/Search'

function ColorSchemesExample() {
  return (
    <>
     <Header />

      <Navbar className='navbar'>
        <Container className='navbar'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Slider />

      <Search />

    </>
  );
}

export default ColorSchemesExample;