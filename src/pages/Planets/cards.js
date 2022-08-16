
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CartaApp({nombre,rotacion,orbitacion,diametro,clima,creado,editado,gravedad,terreno,superficie,poblacion}) {
  return (
    <Card style={{ width: '20rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>{nombre}</strong></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Rotation period: </strong>{rotacion}</ListGroup.Item>
        <ListGroup.Item><strong>Orbital period: </strong>{orbitacion}</ListGroup.Item>
        <ListGroup.Item><strong>Diameter: </strong>{diametro}</ListGroup.Item>
        <ListGroup.Item><strong>Climate: </strong>{clima}</ListGroup.Item>
        <ListGroup.Item><strong>Gravedad: </strong>{gravedad} cm</ListGroup.Item>
        <ListGroup.Item><strong>Terrain: </strong>{terreno}</ListGroup.Item>
        <ListGroup.Item><strong>Surface water: </strong>{superficie}</ListGroup.Item>
        <ListGroup.Item><strong>Population: </strong>{poblacion}</ListGroup.Item>
        <ListGroup.Item><strong>Created: </strong>{creado}</ListGroup.Item>
        <ListGroup.Item><strong>Edited: </strong>{editado}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CartaApp;