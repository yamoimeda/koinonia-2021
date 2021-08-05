import React from 'react';
import '../../App.css';
import Top from "../sections/top";
import Servicios from "../sections/servicios";
import Eventos from "../sections/eventos";
import Reserva from "../sections/reserva";
import Iglesias from "../sections/iglesias";
import Redes from "../sections/redes";

export default class Dashboard extends React.Component {
  render(){
    return(
    <div className="App">

      <Top/>
      <Servicios/>
      <Eventos/>
      <Reserva/>
      <Iglesias/>
      <Redes/>

      
    </div>
  );
} }