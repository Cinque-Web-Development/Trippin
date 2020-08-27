import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ErrorPage from '../ErrorPage/ErrorPage'

import userService from '../../services/userService';

import Layout from '../../components/Layout/Layout';
import StartTrip from '../../components/StartTrip/StartTrip'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    user: userService.getUser(),
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

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

              <Route exact path='/signup' render={({ history }) => 
              <Layout
                user={this.state.user}
                handleLogout={this.handleLogout}
              >
                {/* <ErrorBoundary> */}
                  <SignupPage
                    history={history}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                  />
                {/* </ErrorBoundary> */}
              </Layout>
              }/>

              <Route exact path='/login' render={({ history }) => 
              <Layout>
                {/* <ErrorBoundary> */}
                  <LoginPage
                    history={history}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                  />
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
