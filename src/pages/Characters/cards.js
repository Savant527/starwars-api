import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CartaApp({titulo,imagen,texto}) {
  return (
    <Card style={{ width: '20rem' }} className="card m-5 text-center">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className='titulo-carta' ><strong>{titulo}</strong></Card.Title>
        <Card.Text className='texto-carta'>{texto}</Card.Text>
        <Button variant="dark" className='boton'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaApp;