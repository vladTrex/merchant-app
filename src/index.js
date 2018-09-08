import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'typeface-roboto';

import Home from './screens/HomeScreen';
import SignIn from './screens/SignInScreen';
import About from './screens/AboutScreen';
import Navigation from './components/Navigation';
import MerchantAddingForm from './screens/MerchantAddingScreen';

import {store} from './store';

window.store = store;

const App = () => {
    return <Provider store={store}>
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/about" component={About}/>
            <Route path="/merchant/add" component={MerchantAddingForm}/>
          </Switch>
        </div>
      </Router>
    </Provider>;
};

ReactDOM.render(<App/>, document.getElementById('root-element'));