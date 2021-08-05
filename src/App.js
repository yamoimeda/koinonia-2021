import logo from './logo.svg';
import './App.css';
import React , { useState, useEffect }from "react";
import { db } from './firebase'; 
import './App.css';

import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Koinonia from './components/Koinonia/Koinonia';
import Verificarqr from './components/Koinonia/verificarqr'
import Nuevopago from './components/Koinonia/Nuevopago'



function App() {
  const [books, setBooks] = useState([]);

  // useEffect(  ()  => {
  //   async function fetchData() {
      
  //     const unsub = await db.collection('pedidos') .onSnapshot(querySnapshot => {
  //       querySnapshot.docChanges().forEach(change => {
  //         if (change.type === 'added') {
  //           console.log('New city: ', change.doc.data());
  //           setBooks(change.doc.data());
  //         }
  //         if (change.type === 'modified') {
  //           console.log('Modified city: ', change.doc.data());
  //           setBooks(change.doc.data());
  //         }
  //         if (change.type === 'removed') {
  //           console.log('Removed city: ', change.doc.data());
  //           setBooks(change.doc.data());
  //         }
  //       });
  //     });
  //   }
  //   fetchData()
    
    
  // }, []);

  return (
    <div className="wrapper">
    <HashRouter>
      <Switch>
        <Route exact path="/">
        <Redirect to="/koinonia" />
        </Route>

        
        <Route exact path="/koinonia">
          <Koinonia />
        </Route>
        <Route exact path="/koinonia/verificar/:id">
          <Verificarqr />
        </Route>
        <Route exact path="/koinonia/nuevopago/:id">
          <Nuevopago />
        </Route>
      </Switch>
    </HashRouter>
  </div>
  );
}

export default App;
