import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from '../../assets/img/1.jpg';
import Imagen2 from '../../assets/img/2.jpg';
import Imagen3 from '../../assets/img/3.jpg';


function CarruselApp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselApp;