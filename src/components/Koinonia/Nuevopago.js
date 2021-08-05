import React, { Component } from "react";
import {
  Button,
  TextField
} from "@material-ui/core";
import Dropzone, {useDropzone} from 'react-dropzone';
import firebase from '../../firebase'
import { withRouter } from "react-router";

export class Nuevopago extends Component {
  
  constructor() {
    super();
    this.onDrop = (files) => {
        this.getAsText(files[0]);
        this.setState({files:files})
    }
    
  }

  state = {
    disabled: false,
    files: [],
    downloadURL: null,
    file:null,
    monto:"",
    montoer:false,
    id:undefined
  };

  componentDidMount(){
      
    const id = this.props.match.params.id;
    this.setState({id:id})
  }
  getAsText=(fileToRead)=> {
    var reader = new FileReader();
    // Read file into memory as UTF-8    

    reader.readAsDataURL(fileToRead);
    // Handle errors load
    reader.onload = this.loadHandler;
    reader.onerror = this.errorHandler;
  } 

  
  loadHandler=(event)=>{
    const {  handleChangefilebob,handleChange } = this.props;
    var file = event.target.result;
    this.setState({downloadURL:file,file:file})
    
  }

  errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }
   

  subircaptura = ()=>{
      var monto = this.state.monto
      console.log(monto);
   const routeChange= ()=>{
        let path = `/koinonia`;
        this.props.history.push(path);
      }
    if (this.state.monto == ""){
        this.setState({montoer:true})
    }else{
       
        if(this.state.files.length != 0){
            
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
      
            today = dd + '-' + mm + '-' + yyyy;
          var registro = firebase.firestore().collection("koinonia-registros").doc(this.state.id)
          var storageRef = firebase.storage().ref("koinonia/comprobantes");
          this.setState({ id: registro.id });
          var listRef = storageRef.child(registro.id);
          listRef.putString(this.state.file, 'data_url').then(function(snapshot) {
           snapshot.ref.getDownloadURL().then(function(downloadURL) {
                var u = "url"+today
                var p = "monto"+today
               registro.set({
                  
                  [u]:downloadURL,
                  [p]:monto
              
              
          }, { merge: true }).then(()=>{
              alert("cargado correctamente")
            routeChange()
          }).catch((error) => {
                listRef.delete()
              alert("trate nuevamente")
                 
            console.error("Error writing document: ", error);
        });
            });
      
          });
      
          }
    }

  }

  handleChange =event =>e=>{

    this.setState({ [event]: e.target.value  });
  }
 

  render() {

    const files =this.state.files.map((file,index) => (
        <li key={file.name}>
          {file.name}
        </li>
      ));
    return (
        <section className="formpago" >
            <h3 className="textokoiform4">Comprobante de pago</h3>
            <h4 className="textokoiform4">Agregue aquí el comprobante de pago.</h4>
            <h4 className="textokoiform4">Puede hacerlo por yappy @aposentoaltopty o por Global Bank Ministerio Evangelico El Aposento Alto cuenta corriente 01101232599.</h4>
         <Dropzone  className='dropzone'   onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Arrastre un archivo  o haga click para seleccionarlo (comprobante de depósito)</p>
              <img
                  className="imagencaptura"
                  src={this.state.downloadURL || ""}
                  alt="Imagen"
                  height="120"
                  
                />
            </div>
            <aside>
              <h4>Archivo</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
      <TextField
          error={this.state.montoer}
          label="Monto a pagar"
          onChange={this.handleChange("monto")}
          defaultValue={this.state.monto}
          variant="outlined" 
          helperText="Monto pagado a la cuenta"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "91%"}}
        />
        <Button
          style={{background: "#fa7b25", color: "#ffff",
            width: "80%", height:"10%"
          }}
          label="Continue"
          onClick={()=>this.subircaptura()}
        >
          {" "}
          Subir
        </Button>
      </section>
    );
  }
}

export default withRouter(Nuevopago);
