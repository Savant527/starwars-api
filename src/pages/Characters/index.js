import React, {useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import CartaApp from "./cards";
import { Container } from "react-bootstrap";


const CartasApp = () => {

    const {getAllPeople, dataPeople} = usePerson();

    useEffect(() => {

        getAllPeople();

      console.log(dataPeople);
    }, []);
    
  return (
   <Container className="d-flex justify-content-center flex-wrap">
      {dataPeople.map((people) =>(
    <CartaApp key={people.name} nombre={people.name} genero={people.gender} nacimiento={people.birth_year} ojos={people.eye_color} cabello={people.hair_color} piel={people.skin_color} creado={people.created} editado={people.edited} altura={people.height} peso={people.mass}/>
   ))}
   </Container>
        
  );
};

export default CartasApp;
