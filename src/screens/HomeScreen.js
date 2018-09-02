import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import Home from '../components/Home';
import AuthHOC from '../HOCs/AuthHOC';

const mapStateToProps = state => ({
    auth: state.app.auth,
    merchants: state.merchant,
});

export default compose(connect(mapStateToProps), AuthHOC)(Home)
