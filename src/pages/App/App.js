import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';


import ErrorPage from '../ErrorPage/ErrorPage'
import GoogleLoginButton from '../../components/GoogleLoginButton'

import Layout from '../../components/Layout/Layout';
import StartTrip from '../../components/StartTrip/StartTrip'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class App extends Component {




  render () {
    return (
      <>
            <Switch>
              <Route exact path='/' render={() => 
              <Layout
                user={this.state.user}
                handleLogout={this.handleLogout}
              >
                {/* <ErrorBoundary> */}
                  <StartTrip />
                {/* </ErrorBoundary> */}
              </Layout>
              }/>

           

              <Route path='*' render={({history}) => 
                <ErrorPage />
              }/>
            </Switch>
      </>
    );
  }
}

export default App;
