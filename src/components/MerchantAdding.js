import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {
    TextField,
} from 'redux-form-material-ui'

import {StyledContainer} from './styles';

class MerchantAddingForm extends PureComponent {
    render() {
        return (
            <StyledContainer>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <Field name="firstName" label="First Name" component={TextField} type="text"/>
                    </div>
                    <div>
                        <Field name="lastName" label="Last Name" component={TextField} type="text"/>
                    </div>
                    <div>
                        <Field name="email" label="Email" component={TextField} type="email"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </StyledContainer>
        );
    }
};

export default reduxForm({form: 'merchantForm'})(MerchantAddingForm);