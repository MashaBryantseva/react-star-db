import React from 'react';

import './style.css';

const ItemList = ({ onListItemSelected, renderItem, data }) => (
  <ul className="item-list list-group">
    {
      (data || []).map(({ id, ...item }) => (
        <li
          key={id}
          className="item-list-item list-group-item"
          onClick={() => onListItemSelected(id)}
        >
          { renderItem(item) }
        </li>
      ))
    }
  </ul>
);

export default ItemList;
