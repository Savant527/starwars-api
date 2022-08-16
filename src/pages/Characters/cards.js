
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CartaApp({nombre,genero,nacimiento,ojos,cabello,piel,creado,editado,altura,peso}) {
  return (
    <Card style={{ width: '20rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>{nombre}</strong></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>Gender: </strong>{genero}</ListGroup.Item>
        <ListGroup.Item><strong>Birth year: </strong>{nacimiento}</ListGroup.Item>
        <ListGroup.Item><strong>Eyes color: </strong>{ojos}</ListGroup.Item>
        <ListGroup.Item><strong>Hair color: </strong>{cabello}</ListGroup.Item>
        <ListGroup.Item><strong>Skin color: </strong>{piel}</ListGroup.Item>
        <ListGroup.Item><strong>Height: </strong>{altura} cm</ListGroup.Item>
        <ListGroup.Item><strong>Mass: </strong>{peso} kg</ListGroup.Item>
        <ListGroup.Item><strong>Created: </strong>{creado}</ListGroup.Item>
        <ListGroup.Item><strong>Edited: </strong>{editado}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CartaApp;