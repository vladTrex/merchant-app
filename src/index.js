import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import 'typeface-roboto';

import Home from './screens/HomeScreen';
import SignIn from './screens/SignInScreen';
import About from './screens/AboutScreen';
import Navigation from './components/Navigation';
import MerchantAddingScreen from './screens/MerchantAddingScreen';
import MerchantEditingScreen from './screens/MerchantEditingScreen';
import Merchant from './screens/MerchantScreen';

import {store, persistor} from './store';

window.store = store;

const App = () => {
    return <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <Navigation/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/about" component={About}/>
              <Route path="/merchant/add" component={MerchantAddingScreen}/>
              <Route path="/merchant/edit/:id" component={MerchantEditingScreen}/>
              <Route path="/merchant/:id" component={Merchant}/>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>;
};

ReactDOM.render(<App/>, document.getElementById('root-element'));