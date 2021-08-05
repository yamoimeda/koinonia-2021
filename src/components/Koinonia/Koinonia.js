import React,{useRef } from 'react';
import '../../App.css';
import Formulario from './formulario'
import Verificar from './verificar'
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.formularioref = React.createRef();
    this.verificarref = React.createRef();
  }
 



  render(){
    return(
    <div className="App">

        <div >
            

            <div className="wave-containerkoi">
            
                <div className="logokoi">
                <h1 className="textokoi">Koinonia 2021 está cerca, reserva tu boleto</h1>
                <h3 className="textokoi2">El evento que todos están esperando. Koinonia 2021 presentado por El Ministerio Evangélico El Aposento Alto. </h3>
               

                <div id="containerkoi">
                  <button className="learn-more" onClick={() => this.formularioref.current.scrollIntoView() }>
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text" id="textoliso" >RESERVAR</span>
                    
                  </button>
                  <button className="learn-more" onClick={() => this.verificarref.current.scrollIntoView() }>
                    
                    <span className="button-text">VERIFICAR</span>
                    
                  </button>
                  
                </div>

                </div>

                
                
            </div>
            
            <section ref={this.hola}  id="sectionkoireserva">

                <div  className="headerolas">

                  <div className="inner-header flex">
                  <div className="contenido">

                  <Formulario refProp={this.formularioref} />
                  <Verificar refProp={this.verificarref}/>
                  </div>
                
                  
                  </div>

                  <div>
                  <svg className="waves" xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                  <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <g className="parallax">
                  <use href="#gentle-wave" x="48" y="0" fill="rgba(8,1,37,0.7" />
                  <use href="#gentle-wave" x="48" y="3" fill="rgba(8,1,37,0.5)" />
                  <use href="#gentle-wave" x="48" y="5" fill="rgba(8,1,37,0.3)" />
                  <use href="#gentle-wave" x="48" y="7" fill="#15035f " />
                  </g>
                  </svg>
                  </div>
                  <div className="contenidoolas flex">
                  <p>Yamir Mena | 2021 | MEEAA</p>
                  </div>
                  </div>
                 
            </section>
            
        </div>

      
    </div>
  );
} }