import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
import ManageProducts from './components/ManageProducts';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Register from './components/Register';
import PrivateRoutes from './components/routing/PrivateRoutes';
import setAuthToken from './components/utils/setAuthToken';
import { loadUser } from './redux/actions/auth';
import store from './redux/store';

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
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/manage-products" component={ManageProducts} />
            <PrivateRoutes exact path="/cart" component={Cart} />
            <Navbar />
            <Footer />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
