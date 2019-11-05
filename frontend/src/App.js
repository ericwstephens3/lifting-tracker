import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './webpages/HomePage'

class App extends Component{
  render() {
    const App = () => (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
    return (
      <BrowserRouter>
        <Switch>
          <App/>
        </Switch>  
      </BrowserRouter>
    );
  }
}

export default App;
