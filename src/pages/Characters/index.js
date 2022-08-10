import React, {useEffect } from "react";
import { usePerson } from "../../hooks/usePerson";
import CartaApp from "./cards";
import { Container } from "react-bootstrap";


const CartasApp = () => {
    const {getAllPeople, dataPeople} = usePerson();
    useEffect(() => {
        getAllPeople();
      console.log([dataPeople]);
    }, []);
    
  return (
   <Container className="d-flex justify-content-center flex-wrap">
    <CartaApp />
   </Container>
        
  );
};

export default CartasApp;
