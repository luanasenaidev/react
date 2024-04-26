import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import weCookLogo from '../img/wecook.png'; // Importe a imagem wecook.png da pasta img
import coracao from '../img/coracao.png'; 
import conta from '../img/conta.png'; 

function Header() {
  return (
    <>
      <Navbar bg="blue" data-bs-theme="dark">
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Navbar.Brand href="#home" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={weCookLogo} // Altere o caminho para a imagem wecook.png
              alt="WeCook Logo" // Adicione um texto alternativo para acessibilidade
              style={{ width: '220px', height: 'auto', marginBottom: '10px', marginLeft: '430px' }} // Estilo para ajustar o tamanho da imagem
            />
            <a>
            <img
              src={conta} // Altere o caminho para a imagem wecook.png
              alt="conta" // Adicione um texto alternativo para acessibilidade
              style={{ width: '30px', height: 'auto', marginTop: '15px', marginLeft: '350px' }} // Estilo para ajustar o tamanho da imagem
            />
            </a>
            <a>
            <img
              src={coracao} // Altere o caminho para a imagem wecook.png
              alt="coracao" // Adicione um texto alternativo para acessibilidade
              style={{ width: '30px', height: 'auto', marginTop: '15px', marginLeft: '15px' }} // Estilo para ajustar o tamanho da imagem
            />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
