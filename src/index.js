import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route render={({history}) => <App history={history} />} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);