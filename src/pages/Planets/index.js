import React, {useEffect } from "react";
import { usePlanets } from "../../hooks/usePlanets";
import CartaApp from "./cards";
import { Container } from "react-bootstrap";


const CartasApp = () => {

    const {getAllPlanets, dataPlanets} = usePlanets();

    useEffect(() => {

        getAllPlanets();

      console.log(dataPlanets);
    }, []);
    
  return (
    <Container className="d-flex justify-content-center flex-wrap">
    {dataPlanets.map((planet) =>(
  <CartaApp key={planet.name} nombre={planet.name} rotacion={planet.rotation_period} orbitacion={planet.orbital_period} diametro={planet.diameter} clima={planet.climate} gravedad={planet.gravity} terreno={planet.terrain} superficie={planet.surface_water} poblacion={planet.population} creado={planet.created} editado={planet.edited}/>
 ))}
 </Container>
        
  );
};

export default CartasApp;
