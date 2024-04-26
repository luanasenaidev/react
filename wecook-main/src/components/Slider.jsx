import Carousel from 'react-bootstrap/Carousel';
import Image from '../img/unsplash_Yh0unf5ik0Q.png';

function Slider() {
  return (
    <Carousel data-bs-theme="dark" style={{ maxHeight: '400px', overflow: 'hidden' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image }
          alt="First slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/600x400"
          alt="Second slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/600x400"
          alt="Third slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
