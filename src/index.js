import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'typeface-roboto';
import {Provider} from 'react-redux';

import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import Links from './components/Links';
import MerchantAddingForm from './screens/MerchantAddingScreen';

import {store} from './store';

window.store = store;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Links/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/merchant/add" component={MerchantAddingForm}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root-element'));