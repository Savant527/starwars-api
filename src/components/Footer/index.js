import React from "react";
import Imagen5 from "../../assets/img/5.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";




export const Footer = () => {
  return (
    <div className="footer">
    <div className="row d-flex justify-content-center align-items-center m-0 bg-dark text-white p-2 row-cols-md-3 row-cols-sm-1">
    <div className="footer-izquierda d-flex justify-content-center align-items-center p-2">
        <a><img src={Imagen5} className="logo"></img></a>
      </div>
      <div className="footer-centro text-center p-2">
        <p>Jhon Sebastian Navas</p>
        <p>ADSI 2341224</p>
        <p>CBI Palmira</p>
      </div>
      <div className="footer-derecha">
        <div className="iconos d-flex justify-content-center align-items-center p-2">
        <a href=""><BsFacebook size ={30} className="imagen m-2"/></a>
          <a href=""><BsInstagram size ={30} className="imagen m-2"/></a>
          <a href=""><BsTwitter size ={30} className="imagen m-2"/></a>
          <a href=""><BsGithub size ={30} className="imagen m-2"/></a>
        </div> 
      </div>
    </div>
      <div className="row m-0 p-3 footer-abajo text-center text-white text-wrap">
        <small> ©2022 <strong>Sebastian Navas</strong> - Todos los derechos reservados</small>
      </div>
    </div>
  );
};