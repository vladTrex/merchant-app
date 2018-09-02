import React, {PureComponent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";

class Links extends PureComponent {
    constructor(){
        super();

        this.state = {
            selectedValue: 0
        };
    }

    handleChange (event, value) {
        this.setState({ selectedValue: value });
    };

    render() {
        return <AppBar position="static">
            <Tabs
                value={this.state.selectedValue}
                onChange={this.handleChange.bind(this)}
            >
                <Tab label="Home" component={Link} to="/"/>
                <Tab label="About" component={Link} to="/about"></Tab>
            </Tabs>
        </AppBar>
    }
}

export default Links;