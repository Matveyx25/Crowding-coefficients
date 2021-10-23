import {Route, withRouter, BrowserRouter, Switch, Redirect, NavLink} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import BottomSheet from './Components/BottomSheet';
import { connect, Provider } from 'react-redux'
import { compose } from 'redux';
import store from './store'

function App() {
  return (
      <div className="App">
        <Switch>
              <Route exact path='/' render={() => <BottomSheet type={'station'}/>}/>
              <Route path='/:tsId?' render={() => <BottomSheet type={'transport'}/>}/>
        </Switch> 
      </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
})

const AppContainer = compose(
  withRouter ,
   connect(mapStateToProps))(App)

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 

export default MainApp;
