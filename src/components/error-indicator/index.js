import React from 'react';

import './style.css';

const ErrorIndicator = () => (
  <div className="error-indicator card">
    <div className="card-body text-warning d-flex flex-column text-center">
      <span className="font-weight-bold">BOOM!</span>
      <span>
        Something has gone terribly wrong.
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  </div>
);

export default ErrorIndicator;
