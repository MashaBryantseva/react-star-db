import React from 'react';

import CardWrapper from '../card-wrapper';

import './style.css';

const Spinner = () => {
  return (
    <CardWrapper>
      <div className="d-flex">
        <div className="lds-css">
          <div className="lds-double-ring">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </CardWrapper>

  );
};

export default Spinner;