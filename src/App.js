import React, { Component }from 'react';

import './App.css';
import { HashRouter, Route } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = React.lazy(() => import('./views/Pages/Login'));
class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>

        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />

        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
