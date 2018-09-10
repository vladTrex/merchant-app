import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';

import { addMerchant } from '../store/actions/merchant';
import MerchantAddingForm from '../components/MerchantAddingForm';

class MerchantAddingScreen extends PureComponent {
  submit(values) {
    const { addMerchant, history } = this.props;
    const merchantId = v4();

    addMerchant(Object.assign({}, values, { id: merchantId }));
    return history.push(`/merchant/${merchantId}`);
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
