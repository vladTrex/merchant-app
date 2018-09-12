import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navigation extends PureComponent {
  constructor() {
    super();

    this.state = {
      selectedValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, tab) {
    const { setActiveTab } = this.props;

    return setActiveTab(tab);
  }

  render() {
    const { auth, doSignOut, activeTab } = this.props;
    if (!auth) return null;

    return (
      <AppBar position="static">
        <Tabs value={activeTab} onChange={this.handleChange}>
          <Tab label="Home" component={Link} to="/" />
          <Tab label="About" component={Link} to="/about" />
          <Tab label="Sign Out" onClick={doSignOut} />
        </Tabs>
      </AppBar>
    );
  }
}

Navigation.propTypes = {
  auth: PropTypes.bool,
  doSignOut: PropTypes.func,
  setActiveTab: PropTypes.func,
  activeTab: PropTypes.any,
};

export default Navigation;
