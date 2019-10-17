import React, { Fragment,useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Login from './components/Login'
import Register from './components/Register'
import store from './redux/store';
import PrivateRoutes from './components/routing/PrivateRoutes';
import setAuthToken from './components/utils/setAuthToken';
import { loadUser } from './redux/actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
          <Route exact path="/" component={Register} />
            <PrivateRoutes exact path="/products" component={ProductList} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Navbar />
            <Footer />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
