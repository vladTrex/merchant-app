import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {addMerchant} from '../store/actions/merchant';
import MerchantAddingForm from '../components/MerchantAdding';

class MerchantAddingScreen extends PureComponent {
    constructor(props){
        super(props);
    }
    submit(values){
       const {addMerchant, history} = this.props;

       addMerchant(values);
       return history.push('/');

    }
    render() {
        return <MerchantAddingForm onSubmit={this.submit.bind(this)} />
    }
}

export default connect(null, {addMerchant})(MerchantAddingScreen);