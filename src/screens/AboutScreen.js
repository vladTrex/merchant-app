import React from 'react';
import { compose } from 'recompose';

import AuthHOC from '../HOCs/AuthHOC';

const About = () => {
  return (
    <div>
      <h2>Merchant App.</h2>
      <p>Application for merchants managing.</p>
    </div>
  );
};

export default compose(AuthHOC)(About);
