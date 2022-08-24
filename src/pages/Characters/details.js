import React, { useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useParams} from "react-router";
import Imagen7 from "../../assets/img/7.jpg";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Detail  () {
  const {back, getAllPeople, dataPeople, Contador, homeworld} = usePerson();

  const params = useParams ()
  const listParams = [params];
  const mapeo = listParams.map((list) => list.name)
  var nombre = mapeo [0]
  useEffect(() => {
    getAllPeople(Contador);
    
  }, [dataPeople]);
  
  const filtrar = dataPeople.filter((filtro) => filtro.name === nombre);
  

  return (
    <div>
    <Container>
      <Button className='m-3' variant="dark" onClick={back}>Back</Button>
      <h1 className='text-center'>{params.name}</h1>
      <div className="container m-3 d-flex justify-content-center align-items-center">
      <div className="imagen">
        <img src={Imagen7} width="450" ></img>
      </div>

      {filtrar.map((person) => (
        <div key={person.name}>
          <ul>
            <li><strong>Gender: </strong>{person.gender}</li>
            <li><strong>Birth year: </strong>{person.birth_year}</li>
            <li><strong>Eyes color: </strong>{person.eye_color}</li>
            <li><strong>Hair color: </strong>{person.hair_color}</li>
            <li><strong>Skin color: </strong>{person.skin_color}</li>
            <li><strong>Height: </strong>{person.height} cm</li>
            <li><strong>Mass: </strong>{person.mass} kg</li>
            <li><strong>Created: </strong>{person.created}</li>
            <li><strong>Edited: </strong>{person.edited}</li>
          </ul>
        </div>
      ))}
      </div>

      {filtrar.map((person) => (
      <div key={person.name} className="container d-flex justify-content-center flex-wrap text-center">
      <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>Homeworld</strong></Card.Header>
      <ListGroup variant="flush" className='texto-carta'>
        <ListGroup.Item>{person.name}</ListGroup.Item>
      </ListGroup>
    </Card>
      <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>Films</strong></Card.Header>
      <ListGroup variant="flush" className='texto-carta'>
        <ListGroup.Item>{person.films}</ListGroup.Item>
      </ListGroup>
    </Card>
      <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>Species</strong></Card.Header>
      <ListGroup variant="flush" className='texto-carta'>
        <ListGroup.Item>{person.species}</ListGroup.Item>
      </ListGroup>
    </Card>
      </div>
    ))}
    </Container>
    </div>
  )
}

export default Detail;
