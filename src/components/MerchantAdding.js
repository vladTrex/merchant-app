import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField, Checkbox } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

import { StyledContainer } from './styles';

class MerchantAddingForm extends PureComponent {
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <StyledContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="firstName"
              label="First Name"
              component={TextField}
              type="text"
            />
          </div>
          <div>
            <Field
              name="lastName"
              label="Last Name"
              component={TextField}
              type="text"
            />
          </div>
          <div>
            <Field
              name="email"
              label="Email"
              component={TextField}
              type="email"
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

MerchantAddingForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'merchantForm' })(MerchantAddingForm);
