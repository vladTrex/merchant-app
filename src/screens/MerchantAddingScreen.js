import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addMerchant } from '../store/actions/merchant';
import MerchantAddingForm from '../components/MerchantAddingForm';

class MerchantAddingScreen extends PureComponent {
  submit(values) {
    const { addMerchant, history } = this.props;

    addMerchant(values);
    return history.push('/');
  }
  render() {
    return <MerchantAddingForm onSubmit={this.submit.bind(this)} />;
  }
}

MerchantAddingScreen.propTypes = {
  addMerchant: PropTypes.func,
  history: PropTypes.object,
};

export default connect(
  null,
  { addMerchant }
)(MerchantAddingScreen);
