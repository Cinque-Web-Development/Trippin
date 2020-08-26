import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ErrorPage from '../ErrorPage/ErrorPage'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import userService from '../../services/userService';
import StartTrip from '../../components/StartTrip/StartTrip'

class App extends Component {
  state = {
    user: userService.getUser()
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
      <Switch>
        <Route exact path='/' render={() => 
        <>
           {/* <ErrorBoundary> */}
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            <StartTrip />
           {/* </ErrorBoundary> */}
        </>
        }/>

        <Route exact path='/signup' render={({ history }) => 
          // <ErrorBoundary>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          // </ErrorBoundary>
        }/>

        <Route exact path='/login' render={({ history }) => 
          // <ErrorBoundary>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          // </ErrorBoundary>
        }/>

        <Route path='*' render={({history}) => 
          <ErrorPage />
        }
        />
      </Switch>
    );
  }
}

export default App;
