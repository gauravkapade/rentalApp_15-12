import React,{Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './Components/NavigationBar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Details from './Components/Details';
import PageNotFound from './Components/PageNotFound';
class App extends Component {
  render(){
    return (
      <Fragment>
        <Navigation/>
        <Switch>
          <Route exact path = '/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
