import React from 'react';
import {compose} from 'recompose';

import AuthHOC from '../HOCs/AuthHOC';

const About = () => {
    return (
        <h2>About</h2>
    );
};

export default compose(AuthHOC)(About);