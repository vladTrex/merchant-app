import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'typeface-roboto';
import {Provider} from 'react-redux';

import Home from './containers/HomeContainer';
import About from './containers/AboutContainer';
import Links from './components/Links';

import {store} from './store';

window.store = store;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Links/>
                    <Switch>
                        <Route exact path="/" render={Home}/>
                        <Route path="/about" render={About}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/>, document.getElementById('app'));