import React from 'react';

export default class top extends React.Component {
  render(){
    return(
    <div >
      <div className="covidalerta">
        <div className="grid-container">
          <div className="text">
              <p>PROHIBIDO EL INGRESO AL TEMPLO SI NO GOZO DE BUENA SALUD, O TIENE CONTACTO CON ALGUIEN POSITIVO COVID-19.</p> 
          </div>
          <div className="imagen">
              <img src="static/covid.png" alt=""/>
          </div>
        </div>
      </div>

      <div className="wave-container">
    
        <div className="logo">
          <div>
              <img src="static/meeaalogo.png" alt=""/>
          </div>  
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#fff" fillOpacity="1" d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,149.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      
      </div>
    </div>
  );
} }