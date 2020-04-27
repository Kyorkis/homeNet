import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Services} from '../Services/Services';
import {Service} from '../Service/Service';
import {Message} from '../Message/Message';
import {Loading} from '../Loading/Loading'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"; 
import {useSelector} from'react-redux';
import './App.css'
function App() {
  const state =  useSelector(state => state);
  const hasError = state.service.hasError || state.services.hasError;
  const isLoading = state.service.isLoading || state.services.isLoading;
  console.log('State in app',state)
  return (
    
    <Router>
      { (isLoading) && <Loading isLoading />}
      <Switch>
        
        <Route path="/services/:id" exact component={Service} />
        <Route path="/services" component={Services} />
        <Route path="/" exact component={ () => <Redirect to={`/services`} /> } />
      </Switch>
    </Router>
  );
}

export default App;
