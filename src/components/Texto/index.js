import React from 'react';
import { Container } from 'react-bootstrap';

const Texto = () => {
  return (
    <Container>
        <h1 className='titulo m-3 p-2 text-center fw-bold fs-1'>Star Wars</h1>
        <br></br>
        <p className='m-2 p-2 text-center'>Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia y universo compartido compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012.
        Su trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan con elementos como «la Fuerza», un campo de energía metafísico y omnipresente que posee un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por los Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo y el odio.</p>
    </Container>
  )
}

export default Texto