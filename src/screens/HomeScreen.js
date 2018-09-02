import React from 'react';
import {connect} from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = state => ({
    auth: state.app.auth,
    merchants: state.merchant,
});

export default connect(mapStateToProps)(Home)
