import React from 'react';

export default function Redes() {
  return(
    <section className="vh">
        <div className="socialm" id="ytb" >
            <a className="overlay" href="https://www.instagram.com/aposentoaltopty/"></a>
            <div className="logo">
                <img src="static/ytb.png" alt=""/>
            </div>

            <div className="text">
                <p>Aposento Alto Panama</p>
            </div>

        </div>

        <div  className="socialm" id="insta">
            <a className="overlay" href="https://www.youtube.com/c/AposentoAltoPanama"></a>
            <div className="logo">
                <img src="static/insta.png" alt=""/>
            </div>
            <div className="text">
                <p>@aposentoaltopty</p>
            </div>
        </div>

        <div  className="socialm" id="fb">
            <a className="overlay" href="https://www.facebook.com/AposentoAltopty"></a>
            <div className="logo">
            <img src="static/fb.png" alt=""/>
            </div>
            <div className="text">
                <p>Aposento Alto Panama</p>
            </div>

        </div>
    </section>
  );
}