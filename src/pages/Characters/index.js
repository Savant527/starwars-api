import React, { useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import CartaApp from "./cards";
import { Container } from "react-bootstrap";
import Imagen7 from "../../assets/img/7.jpg";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const CartasApp = () => {
  const { getAllPeople, dataPeople, aumentar, disminuir, Contador} = usePerson();

  useEffect(() => {
    getAllPeople(Contador);

    console.log(dataPeople);
  }, [dataPeople]);

  return (
    <div>
      <h1 className="text-center m-4">CHARACTERS</h1>
    
    <Container className="d-flex justify-content-center flex-wrap">
   
      {dataPeople.map((people) => (
        <CartaApp
          key={people.name}
          keyName={people.name}
          nombre={people.name}
          genero={people.gender}
          nacimiento={people.birth_year}
          ojos={people.eye_color}
          cabello={people.hair_color}
          piel={people.skin_color}
          creado={people.created}
          editado={people.edited}
          altura={people.height}
          peso={people.mass}
          name={people.name}
          imagen={Imagen7}
        />
      ))}
      <div className="container d-flex justify-content-around align-items-center">
        <button className="m-2 bg-transparent border-0" onClick={disminuir}><BsArrowLeft size={40}/></button>
        <strong>{Contador}</strong>
        <button className="m-2 bg-transparent border-0" onClick={aumentar}><BsArrowRight size={40}/></button>
      </div>
    </Container>
  </div>
  );
};

export default CartasApp;
