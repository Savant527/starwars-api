import React, { useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import Detail from "./details";
import { Container } from "react-bootstrap";
import Imagen7 from "../../assets/img/7.jpg";

const Details = () => {
  const { getAllPeople, dataPeople} = usePerson();

  useEffect(() => {
    getAllPeople();

    console.log(dataPeople);
  }, [dataPeople]);

  return (
    <div>
    <Container className="d-flex justify-content-center flex-wrap">
   
      {dataPeople.filter(people = people.results).map(FilterPeople => (
        <Detail
          key={FilterPeople.name}
          keyName={FilterPeople.name}
          nombre={FilterPeople.name}
          genero={FilterPeople.gender}
          nacimiento={FilterPeople.birth_year}
          ojos={FilterPeople.eye_color}
          cabello={FilterPeople.hair_color}
          piel={FilterPeople.skin_color}
          creado={FilterPeople.created}
          editado={FilterPeople.edited}
          altura={FilterPeople.height}
          peso={FilterPeople.mass}
          name={FilterPeople.name}
          imagen={Imagen7}
        />
      ))}
    </Container>
  </div>
  );
};

export default Details;