import React from 'react';

const Row = ({ leftComponent, rightComponent }) => (
  <div className="row mb-2">
    <div className="col">
      { leftComponent }
    </div>
    <div className="col">
      { rightComponent }
    </div>
  </div>
);

export default Row;
