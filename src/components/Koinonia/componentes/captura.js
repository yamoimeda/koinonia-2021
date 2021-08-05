import React, { Component } from "react";
import {
  Button,
} from "@material-ui/core";
import Dropzone, {useDropzone} from 'react-dropzone';
import firebase from '../../../firebase'

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();
    this.onDrop = (files) => {
        this.getAsText(files[0]);
        this.props.handleChangefile(files)
    }
    this.state = {
      disabled: false,
      files: [],
      downloadURL: null
    };
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
    this.setState({downloadURL:file})
    handleChangefilebob(file);
    
  }

  errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }

  render() {
    const { values, subircap } = this.props;

    const files =values.files.map((file,index) => (
        <li key={file.name}>
          {file.name}
        </li>
      ));
    return (
        <section className="formg" ref={this.props.refe} >
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
                  height="200"
                  
                />
            </div>
            <aside>
              <h4>Archivo</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
       
        <Button
          style={{
            background: "#1b0578",
            color: "#FFFFFF",
            marginRight: "1em",
            width: "40%",
            height:"10%"
          }}
          label="Back"
          onClick={this.back}
        >
          Atras
        </Button>
        <Button
          style={{background: "#fa7b25", color: "#ffff",
            width: "40%", height:"10%"
          }}
          label="Continue"
          onClick={subircap}
        >
          {" "}
          Finalizar
        </Button>
      </section>
    );
  }
}

export default FormPersonalDetails;
