import React, { useEffect, useState ,useContext} from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ImageGroup, Image } from 'react-fullscreen-image'
import {
  Button,
  TextField,
  Modal

} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Paper from '@material-ui/core/Paper';
import firebase from '../../firebase';
import Badge from '@material-ui/core/Badge';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#15035f',
    color: 'white',
    textAlign:"center"
  },
  body: {
    fontSize: 14,
    textAlign:"center"
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nombre, cedula, igle, red, monto,tipo,url,uid,verificado,pagosurls) {
  return { nombre, cedula, igle, red, monto,tipo,url,uid,verificado,pagosurls };
}

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export class Preferences extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      rows : [],
      open:false,
      url:"",
      monto:"",
      red:"",
      total:0,
      registrados:0
    };
  }
  
  
 componentDidMount(){
  firebase.firestore().collection("koinonia-registros")
  .get()
  .then((querySnapshot) => {
   let newdata = this.state.rows
   let total = 0
   let registrados = 0
   
    querySnapshot.forEach((doc) => {
      var d = doc.data()
     newdata.push(createData(d.nombre +" "+d.apellido, d.cedula, d.igle, d.red, d.monto,d.tipo,d.url,d.uid,d.verificado,d.pagosurls))
     total = total + parseFloat(d.monto)
     registrados = registrados+1
      });
      
      this.setState({rows:newdata,total:total,registrados:registrados})
    })

 }

 
    handleChange = input => e =>{
     
        this.setState({ [input]: e.target.value });
     
    }

  

verificar = uid =>{

  firebase.firestore().collection("koinonia-registros").doc(uid).update({
    verificado: 1
})
.then(() => {
  var newdata = this.state.rows
  var index = newdata.findIndex((obj => obj.uid == uid));

  newdata[index].verificado = 1
  this.setState({rows:newdata})
  alert("boleto verificado")
})

}

actualizar = uid =>{
  
  if(this.state.monto == "" && this.state.red==""  ){
    console.log("valor igual")
  }else{
    if(this.state.monto == "" && this.state.red != ""  ){
      
    firebase.firestore().collection("koinonia-registros").doc(uid).update({
      red:this.state.red
  })
  .then(() => {
    var newdata = this.state.rows
    var index = newdata.findIndex((obj => obj.uid == uid));
  
    newdata[index].red = this.state.red
    this.setState({rows:newdata})
    alert("actualizado")
  })

    }

    if(this.state.monto != "" && this.state.red==""  ){


      firebase.firestore().collection("koinonia-registros").doc(uid).update({
        monto: this.state.monto
    })
    .then(() => {
      var newdata = this.state.rows
      var index = newdata.findIndex((obj => obj.uid == uid));
    
      newdata[index].monto = this.state.monto
      this.setState({rows:newdata})
      alert("actualizado")
    })
      
    }

    if(this.state.monto != "" && this.state.red!=""  ){

      
    firebase.firestore().collection("koinonia-registros").doc(uid).update({
      monto: this.state.monto,
      red:this.state.red
  })
  .then(() => {
    var newdata = this.state.rows
    var index = newdata.findIndex((obj => obj.uid == uid));
  
    newdata[index].monto = this.state.monto
    newdata[index].red = this.state.red
    this.setState({rows:newdata})
    alert("actualizado")
  })
    }

  }
  

}

handleClose=()=>{
  this.setState({open:false})
}

handleOpen=(url)=>{
 
  this.setState({open:true,url:url})
}
  render() {


   return(
     <div>
       <h4 className="textokoiform2">Registrados: {this.state.registrados},  Suma de montos: {this.state.total} </h4>
    <TableContainer component={Paper}>
      <ImageGroup>
      <Table aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="left">Cedula</StyledTableCell>
            <StyledTableCell align="left">Igelsia</StyledTableCell>
            <StyledTableCell align="left">Red</StyledTableCell>
            <StyledTableCell align="left">Monto</StyledTableCell>
            <StyledTableCell align="left">Boleto</StyledTableCell>
            <StyledTableCell align="left">Estado</StyledTableCell>
            <StyledTableCell align="right">...</StyledTableCell>
            <StyledTableCell align="right">Comprobante</StyledTableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <StyledTableRow key={row.uid}>
              <StyledTableCell align="left">{row.nombre}</StyledTableCell>
              <StyledTableCell align="left">{row.cedula}</StyledTableCell>
              <StyledTableCell align="left">{row.igle}</StyledTableCell>
              <StyledTableCell align="left">
              <TextField
                        onChange={this.handleChange("red")}
                        defaultValue={row.red}
                        variant="outlined" 
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{width: "100%"}}
                      />
                </StyledTableCell>
              <StyledTableCell align="left">
                    <TextField
                        onChange={this.handleChange("monto")}
                        defaultValue={row.monto}
                        variant="outlined" 
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{width: "45%"}}
                      />
                
                </StyledTableCell>
              <StyledTableCell align="left">{row.tipo == 1 ? 'Completo' :"Media jornada "}</StyledTableCell>
              <StyledTableCell align="left">{row.verificado == 1 ? <Badge color="primary" badgeContent={"verificado"}/> : row.pagosurls.length > 1 ? <Badge color="secondary" badgeContent={"Otro pagó"}/>:<Badge color="secondary" badgeContent={"pendiente"}/>}</StyledTableCell>
              <StyledTableCell align="right">

                      <Button
                style={{ background: "blue", color: "#ffff",width: "40%",marginRight:5,height:"20%",fontSize:10}}
                label="verificar"
                onClick={()=>this.verificar(row.uid)}
              >
                Verificar
              </Button>
              <Button
                style={{ background: "#fa7b25", color: "#ffff",width: "40%",margin:"auto",height:"20%",fontSize:10}}
                label="actualizar"
                onClick={()=>this.actualizar(row.uid)}
              >
                Actualizar
              </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
              <div id={row.uid} className="foto" onClick={()=>this.handleOpen(row.pagosurls)}>
                   
                      <img src={row.url} alt={row.url}/>
                    
              </div>
                      
                
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </ImageGroup>
    </TableContainer>

    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
        
        <DialogContent dividers>

          {

            
          }
        <div className="fotomodal">
                   
                   <img style={{height:500}} src={this.state.url} alt={this.state.url}/>
                 
           </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
</div>
   )
  }
}
export default Preferences;