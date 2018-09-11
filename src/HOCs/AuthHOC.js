import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuth } from '../store/selectors/auth';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: getAuth(state) };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
