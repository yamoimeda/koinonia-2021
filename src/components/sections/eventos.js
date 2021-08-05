import React from 'react';
import Slider from '../Slider';
export default function eventos() {
  return(
    <section  className="vh" id="sectionevent">
        <div id="divicion">
            <div className="titulo">
                <div>
                    <p>PROXIMOS EVENTOS</p>
                </div>
            </div>

            <Slider options={{ wrapAround: true,}} >
               <div className="gallery-cell" style={{backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.452)),url(static/koinonia.gif)"  }} >

                    <p className="title">
                        KOINONIA
                    </p>
                    <p className=" description">
                        13, 14 Y 15 DE NOVIEMBRE 
                    </p>

                </div>

                <div className="gallery-cell" style={{backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.452)),url(static/atravez.jpg)" }}  >
                    
                    <p className="title">
                        A TRAVEZ DE LA BIBLIA
                    </p>
                    <p className=" description">
                        SABADOS 3:00 PM
                    </p>
                </div>

            </Slider>
            
        </div>
    </section>
  );
}