import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField, Checkbox } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

import { StyledContainer } from './partials/styles';
import { email, required, validate } from './utils/forms';

class MerchantEditing extends PureComponent {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const { initialize, merchant } = this.props;

    const initData = {
      firstName: merchant.firstName,
      lastName: merchant.lastName,
      email: merchant.email,
      phone: merchant.phone,
    };

    initialize(initData);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <StyledContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="firstName"
              label="First Name"
              component={TextField}
              validate={required}
              type="text"
            />
          </div>
          <div>
            <Field
              name="lastName"
              label="Last Name"
              component={TextField}
              validate={required}
              type="text"
            />
          </div>
          <div>
            <Field
              name="email"
              label="Email"
              component={TextField}
              validate={[required, email]}
              type="email"
            />
          </div>
          <div>
            <Field
              name="phone"
              label="Phone number"
              component={TextField}
              type="text"
            />
          </div>
          <div>
            <FormControlLabel
              control={<Field name="isPremium" component={Checkbox} />}
              label="Premium account"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </StyledContainer>
    );
  }
}

MerchantEditing.propTypes = {
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  merchant: PropTypes.object.isRequired,
};

export default reduxForm({ form: 'merchantEdit', validate })(MerchantEditing);
