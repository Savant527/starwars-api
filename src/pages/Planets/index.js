import React, { useEffect } from "react";
import { usePlanets } from "../../hooks/usePlanets";
import CartaApp from "./cards";
import { Container } from "react-bootstrap";
import Imagen8 from "../../assets/img/8.jpg";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const CartasApp = () => {
  const { getAllPlanets, dataPlanets, aumentar, disminuir, Contador } = usePlanets();

  useEffect(() => {
    getAllPlanets(Contador);

    console.log(dataPlanets);
  }, [dataPlanets]);

  return (
    <div>
      <h1 className="text-center m-5">PLANETS</h1>
    <Container className="d-flex justify-content-center flex-wrap">
      
      {dataPlanets.map((planet) => (
        <CartaApp
          key={planet.name}
          nombre={planet.name}
          rotacion={planet.rotation_period}
          orbitacion={planet.orbital_period}
          diametro={planet.diameter}
          clima={planet.climate}
          gravedad={planet.gravity}
          terreno={planet.terrain}
          superficie={planet.surface_water}
          poblacion={planet.population}
          creado={planet.created}
          editado={planet.edited}
          imagen={Imagen8}
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
