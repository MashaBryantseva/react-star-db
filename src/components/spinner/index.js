import React from 'react';

import './style.css';

const Spinner = () => {
  return (
    <div className="spinner card">
      <div className="card-body">
        <div className="d-flex">
          <div className="lds-css">
            <div className="lds-double-ring">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Spinner;