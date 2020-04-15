import React from 'react';

const Record = ({ item, label, field, classNames }) => (
  <li className={classNames}>
    { label }: { item[field] }
  </li>
);

export default Record;
