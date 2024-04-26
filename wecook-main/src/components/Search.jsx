import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Search() {
  return (
    <>
                <Form className="d-flex" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Form.Control
                    style={{width:'900px', marginTop:'50px', backgroundColor:'rgba(0, 75, 173, 0.5)'}}
                    type="search"
                    placeholder="Pesquise sua receita do momento..."
                    className="me-2"
                    aria-label="Pesquise sua receita do momento..."
                  />
                  <Button style={{marginTop:'50px'}} variant="secondary">Pesquisar</Button>
                </Form>
                <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="link">Visualizar todas as receitas</Button>
                </Container>
    </>
  );
}

export default Search;