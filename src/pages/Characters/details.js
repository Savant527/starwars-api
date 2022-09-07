import React, { useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import Imagen7 from "../../assets/img/7.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { usePlanets } from "../../hooks/usePlanets";
import { useFilms } from "../../hooks/useFilms";

function Detail() {
  const { back, getAllPeople, dataPeople, Contador } = usePerson();
  const { detailsPlanets, dataPlanetPerson } = usePlanets();
  const {detailsFilms, dataFilms} = useFilms();

  const params = useParams();
  const listParams = [params];
  const mapeo = listParams.map((list) => list.name);
  var nombre = mapeo[0];
  useEffect(() => {
    getAllPeople(Contador);
  }, [dataPeople]);

  const filtrar = dataPeople.filter((filtro) => filtro.name === nombre);

  const mapeo2 = filtrar.map((world) => world.homeworld);
  var homeworld = mapeo2[0];
  detailsPlanets(homeworld);

  const mapeo3 = filtrar.map((pelicula) => pelicula.films)
  var films = mapeo3[0];
  detailsFilms([films]);
  console.log(films);

  return (
    <div>
      <Container>
        <Button className="m-3" variant="dark" onClick={back}>
          Back
        </Button>
        <h1 className="text-center">{params.name}</h1>
        <div className="container m-3 d-flex justify-content-center align-items-center flex-wrap">
          <div className="imagen">
            <img src={Imagen7} className="img-fluid" width="450"></img>
          </div>

          {filtrar.map((person) => (
            <div key={person.name} className="mt-3">
              <ul>
                <li>
                  <strong>Gender: </strong>
                  {person.gender}
                </li>
                <li>
                  <strong>Birth year: </strong>
                  {person.birth_year}
                </li>
                <li>
                  <strong>Eyes color: </strong>
                  {person.eye_color}
                </li>
                <li>
                  <strong>Hair color: </strong>
                  {person.hair_color}
                </li>
                <li>
                  <strong>Skin color: </strong>
                  {person.skin_color}
                </li>
                <li>
                  <strong>Height: </strong>
                  {person.height} cm
                </li>
                <li>
                  <strong>Mass: </strong>
                  {person.mass} kg
                </li>
                <li>
                  <strong>Created: </strong>
                  {person.created}
                </li>
                <li>
                  <strong>Edited: </strong>
                  {person.edited}
                </li>
              </ul>
            </div>
          ))}
        </div>
        {/* 
      {  
        filtrar.map((person) => (
      <div key={person.name} className="container d-flex justify-content-center flex-wrap text-center">
      <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>Homeworld</strong></Card.Header>
      <ListGroup variant="flush" className='texto-carta'>
        <ListGroup.Item>{person.homeworld}</ListGroup.Item>
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
      <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light'><strong>Starships</strong></Card.Header>
      <ListGroup variant="flush" className='texto-carta'>
        <ListGroup.Item>{person.starships}</ListGroup.Item>
      </ListGroup>
    </Card>
      </div>
    ))} */}

     <div className="container d-flex justify-content-center flex-wrap text-center">
     {dataPlanetPerson?.length > 0 && (
     <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light text-center'><strong>Homeworld</strong></Card.Header>
      <Card.Title className="text-center mt-3"><strong>{dataPlanetPerson[0].name}</strong></Card.Title>
      <Card.Body>
      <ListGroup variant="flush" className='texto-carta'>
      <ListGroup.Item><strong>Rotation period: </strong>{dataPlanetPerson[0].rotation_period}</ListGroup.Item>
        <ListGroup.Item><strong>Orbital period: </strong>{dataPlanetPerson[0].orbital_period}</ListGroup.Item>
        <ListGroup.Item><strong>Diameter: </strong>{dataPlanetPerson[0].diameter}</ListGroup.Item>
        <ListGroup.Item><strong>Climate: </strong>{dataPlanetPerson[0].climate}</ListGroup.Item>
        <ListGroup.Item><strong>Gravedad: </strong>{dataPlanetPerson[0].gravity}</ListGroup.Item>
        <ListGroup.Item><strong>Terrain: </strong>{dataPlanetPerson[0].terrain}</ListGroup.Item>
        <ListGroup.Item><strong>Surface water: </strong>{dataPlanetPerson[0].surface_water}</ListGroup.Item>
        <ListGroup.Item><strong>Population: </strong>{dataPlanetPerson[0].population}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    )}
     {dataFilms?.length > 0 && (
     <Card style={{ width: '12rem' }} className='m-3'>
      <Card.Header className='bg-dark text-light text-center'><strong>Homeworld</strong></Card.Header>
      <Card.Title className="text-center mt-3"><strong>{dataFilms[0].name}</strong></Card.Title>
      <Card.Body>
      <ListGroup variant="flush" className='texto-carta'>
      {/* <ListGroup.Item><strong>Rotation period: </strong>{dataPlanetPerson[0].rotation_period}</ListGroup.Item>
        <ListGroup.Item><strong>Orbital period: </strong>{dataPlanetPerson[0].orbital_period}</ListGroup.Item>
        <ListGroup.Item><strong>Diameter: </strong>{dataPlanetPerson[0].diameter}</ListGroup.Item>
        <ListGroup.Item><strong>Climate: </strong>{dataPlanetPerson[0].climate}</ListGroup.Item>
        <ListGroup.Item><strong>Gravedad: </strong>{dataPlanetPerson[0].gravity}</ListGroup.Item>
        <ListGroup.Item><strong>Terrain: </strong>{dataPlanetPerson[0].terrain}</ListGroup.Item>
        <ListGroup.Item><strong>Surface water: </strong>{dataPlanetPerson[0].surface_water}</ListGroup.Item>
        <ListGroup.Item><strong>Population: </strong>{dataPlanetPerson[0].population}</ListGroup.Item> */}
      </ListGroup>
      </Card.Body>
    </Card>
    )}
     </div>
      </Container>
    </div>
  );
}

export default Detail;
