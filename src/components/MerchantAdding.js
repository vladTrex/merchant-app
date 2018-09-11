import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField, Checkbox } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

import { StyledContainer } from './partials/styles';
import { email, required, validate } from './utils/forms';

class MerchantAdding extends PureComponent {
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
              name="phoneNumber"
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

MerchantAdding.propTypes = {
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
};

export default reduxForm({ form: 'merchantAdd', validate })(MerchantAdding);
