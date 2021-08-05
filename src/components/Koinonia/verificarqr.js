
import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import firebase from '../../firebase';
import { QRCode } from 'react-qrcode-logo';
import { withRouter } from "react-router";
import lgmeeaa from "./componentes/logo_aposento nuevo-01.png"
import {
    Button,
    TextField,
  
  } from "@material-ui/core";
export class verificar extends Component {
    
  state = {
    step: 1,
    cedula: "",
    html:""
  };
  // Go to next step

  componentDidMount(){
      
    const id = this.props.match.params.id;
    console.log(id);
      this.buscar(id)
  }
  buscar = (uid) => {
      var newdata;
    firebase.firestore().collection("koinonia-registros").where("uid","==",uid)
    .get()
    .then((querySnapshot) => {
     
      querySnapshot.forEach((doc) => {
       newdata = doc.data()
      
        });
      var html = <div>
      <h4 className="textokoiform2">Este boleto: {newdata.verificado == 0 ? "Aun no esta verificado":"Ya esta verificado"}</h4>
      <div  style={{display:"flex",justifyContent:"center"}}>
      
        <div>
        <h4 className="textokoiform4"> {newdata.pagado == 0 ? "Abonado":newdata.pagado == 1 ?"Pagado":"Pendiente"}</h4>
      <h4 className="textokoiform4">Nombre: {newdata.nombre+" " +newdata.apellido}</h4>
            <h4 className="textokoiform4">Cédula: {newdata.cedula}</h4>
            <h4 className="textokoiform4">Sede: {newdata.igle}</h4>
            {newdata.igle == "Panamá" && <h4 className="textokoiform4">Red: {newdata.red}</h4> }
            
            <h4 className="textokoiform4">Boleto: {newdata.tipo == 1 ? 'Completo' :"Media jornada "}</h4>
        </div>
        </div>
     </div>

      if(newdata){
        this.setState({html:html})
      }
    })
    .catch((error) => {
    this.setState({html: <h4 className="textokoiform4">Este boleto No esta registrado</h4>})

    });
  
    
  };
  
  render() {


   return(
       <div className="datos"  >
       {this.state.html}
        </div>
  
   )
  }
}
export default withRouter(verificar);
