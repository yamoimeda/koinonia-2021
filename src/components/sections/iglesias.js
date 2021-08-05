import React from 'react';

const ig = ['Aposento alto Colón','Aposento alto Barraza','Aposento alto Penonomé','Aposento alto Arraijan','Aposento alto Chilibre','Aposento alto Hidekel']
export default function Iglesias() {
  return(
    <section className="vh">
        <div className="titulo">
            <div>
                <p>NUESTRAS IGLESIAS HIJAS</p>
            </div>
        </div>

    <div style= {{display: "flex", justifyContent: "center"}}>
    {ig.map((ig, index) => (
             <div className="card" key={index}>
                <div className="top">
                    <img src="static/logo_aposento nuevo-01(1).png"  alt="" />
                
                    <button className="like">
                        <div className="hexagon"><img src="https://img.icons8.com/fluent-systems-filled/24/000000/instagram-new.png"/></div>
                    </button>
                </div>

             <div className="bottom">
                <div className="desc">{ig}
                </div>
                <div className="buttons">      
                </div>
             </div>
           </div>
            ))}
        
            </div>
    </section>
  );
}