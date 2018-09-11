import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';

import { addMerchant } from '../store/actions/merchant';
import MerchantEditing from '../components/MerchantEditing';
import { getMerchantById } from '../store/selectors/merchant';

const mapStateToProps = (state, ownProps) => ({
  merchant: getMerchantById(state, ownProps.match.params.id),
});

class MerchantEditingScreen extends PureComponent {
  submit(values) {
    console.log(values);
    // const { addMerchant, history } = this.props;
    // const merchantId = v4();
    //
    // addMerchant(Object.assign({}, values, { id: merchantId }));
    // return history.push(`/merchant/${merchantId}`);
  }
  render() {
    const { merchant } = this.props;

    return (
      <MerchantEditing merchant={merchant} onSubmit={this.submit.bind(this)} />
    );
  }
}

MerchantEditingScreen.propTypes = {
  addMerchant: PropTypes.func,
  history: PropTypes.object,
  merchant: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { addMerchant }
)(MerchantEditingScreen);
