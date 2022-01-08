import React from 'react';
import { Item } from '../item/Item';

export function ItemsList(props) {
  return (
    <div>
      {props.itemList.map((item) => (
        <Item key={item.id} item={item} handlers={props.handlers} />
      ))}
    </div>
  );
}
