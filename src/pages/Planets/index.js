import React from "react";
import CartaApp from "./cards";
import { Container } from "react-bootstrap";
import Imagen4 from '../../assets/img/4.jpg';
import Imagen5 from '../../assets/img/5.jpg';
import Imagen6 from '../../assets/img/6.jpg';

const cartas = [
    {
        id: 1,
        titulo: "YODA",
        imagen: Imagen4,
        texto: "Yoda es un personaje ficticio del universo de Star Wars, era uno de los más renombrados y poderosos maestros Jedi durante toda la historia de la Galaxia, y uno de los pocos Jedis de la República Galáctica en sobrevivir hasta la Guerra Civil Galáctica. Siendo el maestro más perceptivo de la Orden, él ejerció como Gran Maestro durante las Guerras Clon y duró en el cargo hasta la Gran Purga Jedi, después de la cual escapó para ocultarse de esta en el planeta Dagobah en el cual vivió hasta su muerte."
    },
    {
        id: 2,
        titulo: "JAR JAR BINKS",
        imagen: Imagen5,
        texto: "Jar Jar Binks es un personaje ficticio del universo Star Wars, que es interpretado por Ahmed Best. Este personaje aparece en el primer episodio de la saga. En agosto de 2015, el creador de Star Wars; George Lucas, reveló que para crear a Jar Jar Binks se inspiró en Goofy, el torpe perro de Disney. Jar Jar, anfibio gungan del planeta Naboo, era un exiliado sin suerte que está alejado de su ciudad, Otoh Gunga y sobrevive solo en los pantanos comiendo crustáceos crudos y lo que encuentra en la ciénaga. Su larga lengua muscular le permite extraer los moluscos de las valvas y los sabrosos gumbols de sus madrigueras en los árboles."
    },
    {
        id: 3,
        titulo: "CHEWBACCA",
        imagen: Imagen6,
        texto: "Chewbacca es un personaje del universo ficticio de Star Wars. Es un wookiee, un bípedo alto, peludo y robusto, especie inteligente del planeta Kashyyyk. Chewbacca es el leal amigo y socio de Han Solo, y sirve como copiloto en la nave espacial de Solo, el Halcón Milenario. Era interpretado por el actor Peter Mayhew. El personaje también ha aparecido en televisión, en libros, cómics y videojuegos."
    },
];


const CartasApp = () => {
  return (
   <Container className="d-flex justify-content-center flex-wrap">
   {cartas.map((carta) =>(
    <CartaApp key={carta.id} titulo={carta.titulo} imagen={carta.imagen} texto={carta.texto}/>
   ))}
   </Container>
  );
};

export default CartasApp;
