import React from 'react';

export default function reserva() {
    const registar =() =>{


    }

  return(
    <section className="vh" >
        <div className="reserva">
            <div className="tabla">
                <img src="static/reserva.png" alt=""/>

            </div>
            <div className="tabla">
                <p className="description">
                    NO TE QUEDES SIN CONGREGARTE.
                </p>
                <button className="learn-more" onClick={registar()} >RESERVA</button>
            </div>
        </div>

</section>
  );
}