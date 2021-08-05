
import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import firebase from '../../firebase';
import { QRCode } from 'react-qrcode-logo';
import lgmeeaa from "./componentes/logo_aposento nuevo-01.png"
import { withRouter } from 'react-router-dom';
import {
    Button,
    TextField,
  
  } from "@material-ui/core";
import { NewReleases } from "@material-ui/icons";
export class verificar extends Component {
  constuctor(props) {
    this.routeChange = this.routeChange.bind(this);
   
  }
  state = {
    step: 1,
    cedula: "",
    html:""
  };
  routeChange (uid){
    let path = `/koinonia/nuevopago/${uid}`;
    this.props.history.push(path);
  }
  // Go to next step
  
  buscar = (cedula) => {
      
      var ur = window.location.href
      var newdata;
    firebase.firestore().collection("koinonia-registros").where("cedula","==",cedula)
    .get()
    .then((querySnapshot) => {
     
      querySnapshot.forEach((doc) => {
       newdata = doc.data()
      
        });
        var precio= newdata.tipo == 1 ? 50:30 
      if (NewReleases)
  
      var html = <div>
      <h4 className="textokoiform2">Este boleto: {newdata.verificado == 0 ? "Aun no esta verificado por la administración":"Ya esta verificado por la administración"}</h4>
      <div  style={{display:"flex",justifyContent:"center"}}>
      <QRCode logoImage={lgmeeaa}  logoHeight={60} logoWidth={60} size={200} value={ur+"/verificar/"+newdata.uid} />
      
        <div>
        <h4 className="textokoiform4"> {newdata.pagado == 0 ? "Abonado":newdata.pagado == 1 ?"Pagado":"Pendiente"}</h4>
      <h4 className="textokoiform4">Nombre: {newdata.nombre+" " +newdata.apellido}</h4>
            <h4 className="textokoiform4">Cédula: {newdata.cedula}</h4>
            <h4 className="textokoiform4">Sede: {newdata.igle}</h4>
            {newdata.igle == "Panamá" && <h4 className="textokoiform4">Red: {newdata.red}</h4> }
            
            <h4 className="textokoiform4">Boleto: {newdata.tipo == 1 ? 'Completo' :"Media jornada "}</h4>
                  {newdata.pagado === 0 && <Button
                style={{background: "#fa7b25", color: "#ffff",
                  width: "40%", height:"20%"
                }}
                label="Continue"
                onClick={()=>this.routeChange(newdata.uid)}
              >
                {" "}
                Pagar
              </Button>
              }
        </div>
        </div>
        
     </div>

      if(newdata){
        this.setState({html:html})
      }
    })
    .catch((error) => {
      console.log(error)
    this.setState({html: <h4 className="textokoiform4">Este boleto No esta registrado</h4>})

    });
  
    
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {


   return(
       <div className="formularioCont2"  ref={this.props.refProp}>
       <h4 className="textokoiform2">Ingresa tu cédula para obtener detalles de tu reserva</h4>
       <div className="verifcar">
<TextField
          label="Cédula"
          onChange={this.handleChange("cedula")}
          defaultValue={this.state.cedula}
          variant="outlined" 
          helperText="Cédula con guiones"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "45%"}}
        />
<div className="botonveri">
<Button
          style={{ background: "#fa7b25", color: "#ffff",width: "10%",margin:"auto",marginLeft:5, height:"60%"}}
          label="bUSCAR"
          onClick={()=> this.buscar(this.state.cedula)}
        >
          BUSCAR
        </Button>
</div>



</div>
<div className="resultadoverificar">
    {this.state.html}
</div>

</div>
  
   )
  }
}
export default withRouter(verificar);
