import React from 'react';

export default function servicios() {
  return(
    <section className="vh" id="sectionservi">     
        <div className="servicios">

            <div className="titulo">
                <div>
                    <p>SERVICIOS</p>
                </div>
            </div>

            <div className="serv">
                <div className="mierc">
                    <p>MIERCOLES</p>
                </div>
                <div className="vier">
                    <p>VIERNES</p>
                </div>
                <div className="dom">
                    <p>DOMINGO</p>
                </div>
                <div className="mirch">

                    <div className="servidesc">
                        <p> TABERNÁCULO DE ORACIÓN</p>
                        <p> 7:00 PM</p>

                    </div>

                </div>
                <div className="vierh">
                    <div className="servidesc">
                        <p> CULTO DE PODER</p>
                        <p> 7:00 PM</p>

                    </div>
                </div>
                <div className="domh">
                    <div className="servidesc">
                        <p> SERVICIO DOMINICAL</p>
                        <p> 10:00 AM</p>

                    </div>
                </div>
            </div>
            
        </div>

    </section>
  );
}