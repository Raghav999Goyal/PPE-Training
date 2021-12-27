import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Service from './Components/Service';
import {BrowserRouter,Route} from 'react-router-dom';
import SingleService from './Components/SingleService';

import Sauna from './Components/Sauna';

ReactDOM.render(
    
    <BrowserRouter>
    <Route exact path="/"><Service/></Route>
    <Route exact path="/Service/:id"><SingleService/></Route>

 <Route exact path = "/Book"><Sauna/> </Route>
    
      </BrowserRouter> 
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
