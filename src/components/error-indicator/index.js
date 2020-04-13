import React from 'react';

import CardWrapper from '../card-wrapper';

const ErrorIndicator = () => (
  <CardWrapper>
    <div className="text-warning d-flex flex-column text-center">
      <span className="font-weight-bold">BOOM!</span>
      <span>
        Something has gone terribly wrong.
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  </CardWrapper>
);

export default ErrorIndicator;
