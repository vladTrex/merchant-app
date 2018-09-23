import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { onEditMechant } from '../store/actions/merchant';
import MerchantEditing from '../components/MerchantEditing';
import { getMerchantById } from '../store/selectors/merchant';

const mapStateToProps = (state, ownProps) => ({
  merchant: getMerchantById(state, ownProps.match.params.id),
});

class MerchantEditingScreen extends PureComponent {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }
  submit(merchant) {
    const { onEditMechant, history, match } = this.props;
    const merchantId = match.params.id;
    const updatedMerchant = Object.assign({}, merchant, { id: merchantId });

    return onEditMechant(updatedMerchant, () =>
      history.push(`/merchant/${merchantId}`)
    );
  }
  render() {
    const { merchant } = this.props;

    return <MerchantEditing merchant={merchant} onSubmit={this.submit} />;
  }
}

MerchantEditingScreen.propTypes = {
  onEditMechant: PropTypes.func,
  history: PropTypes.object,
  merchant: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { onEditMechant }
)(MerchantEditingScreen);
